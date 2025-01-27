import { Category } from "@/model/category-model";

export const getCategoryLists = async () => {
    const categories = await Category.find({});
    return categories;
};