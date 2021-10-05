import movieReducer from "containers/client/Home/module/reducers";
import movieDetailReducer from "containers/client/MovieDetail/module/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import theaterReducer from "containers/client/Home/Theater/module/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "containers/shared/Auth/module/reducers";
import bookingTicketsReducer from "containers/client/SeatPlan/module/reducers";
import userListReducer from "containers/shared/Auth/Register/module/reducers";
import lichSuDatVeReducer from "components/LichSuDatVe/module/reducer";

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  theaterReducer,
  authReducer,
  bookingTicketsReducer,
  userListReducer,
  lichSuDatVeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)

export { store, persistor };
