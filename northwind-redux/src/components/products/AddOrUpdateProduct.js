import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useHistory}from "react-router-dom"


function AddOrUpdateProduct({
  products,
  categories,
  getProducts, // aksiyonlar
  getCategories,
  saveProduct,
  ...props // bu componentin mevcut propsları genişletiyoruz.
}) {

  
   const history = useHistory()
  

  // product state'ini set products ile set edebilirim demek
  const [product, setProduct] = useState({ ...props.product }); //destructing
  const [errors,setErrors] =useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories(); // eğer propstan bir category gelmediyse, demekki redux dan direkt gelmiştir. bunu çağırıyoruz.
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {  // bunun içerisinde bir kural çalıştırabilirim
    // event ile data doldurcaz.
    const { name, value } = event.target;
    // böyle bir obje oluşturdum
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
      // eğer kategori Id alanı varsa, onu integer'a çeviriyoruz. yoksa value'yu olduğu gibi bas diyoruz.
    }));
   

    validate(name,value);
 
  }

 
  function validate(name,value){
    if(name ==="productName" && value===""){
      setErrors(previousErrors=>({...previousErrors,productName:"Ürün ismi olmalıdır"}))
    }else{
      setErrors(previousErrors=>({...previousErrors,productName:""}))
    }
  }


  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/")
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;

  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  // git parametrelere bak. oradan productId'yi çek demek oluyor.
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  // productId varsa, ve productReducer'da ürün varsa

  return {
    product: product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
    
  };
}

// uygulamayı redux'a bağlayacaz

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
