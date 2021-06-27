import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({
  // prop olarak geçtiğim herşey buraya gelecek
  categories,
  product,
  onSave,
  onChange,
  errors
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      ></TextInput>
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      ></TextInput>
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      ></TextInput>
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      ></SelectInput>
      <button type="submit" className="btn btn-success">
        SAVE
      </button>
    </form>
  );
};

export default ProductDetail;
