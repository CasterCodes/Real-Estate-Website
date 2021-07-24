import {
  GET_PROPERTIES,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
} from "../constants/propertyConstants";
import properties from "../../dev-data/listing";

export const getPropertyList = () => async (dispatch) => {
  dispatch({ type: GET_PROPERTIES, payload: properties });
};

export const getFeaturedList = () => async (dispatch) => {
  const featured = properties
    .filter((property) => property.featured === true)
    .slice(0, 6);
  dispatch({ type: GET_FEATURED_PROPERTIES, payload: featured });
};

export const getProperty = (id) => async (dispatch) => {
  const property = properties.find((property) => property.id === +id);
  dispatch({ type: GET_PROPERTY, payload: property });
};
