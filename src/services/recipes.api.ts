import axios from 'axios';
import { API_URL } from '../utils/constants';
import { RecipeResponse } from '../types/recipe';

export const fetchRecipesAPI = async (): Promise<RecipeResponse> => {
  const response = await axios.get<RecipeResponse>(API_URL);
  return response.data;
};

export const fetchRecipeByIdAPI = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};