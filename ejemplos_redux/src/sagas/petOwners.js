import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/petOwners';
import * as types from '../types/petOwners';

const API_BASE_URL = 'http://localhost:8000/api/v1';

function* fetchOwners(action){
	try {
		const response = yield call(
			fetch,
			`${API_BASE_URL}/owner/`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		if (response.status === 200) {
			//Falta esto
			yield put(actions);
		} else {
			const { algo } = yield response.json();
			yield put(actions.failFetchingPetOwners(algo));
		}
	} catch (error) {
		yield put(actions.failFetchingPetOwners('Fallo horrible la conexion mano'));
	}
};

function* watchFetchOwners(){
	yield takeEvery(
		types.PET_OWNERS_FETCH_STARTED,
		fetchOwners,
	);
};


function* removeOwner(action){
	try {
		const response = yield call(
			remove,
			`${API_BASE_URL}/owner/`
		);
	} catch (error) {}
};

function* watchRemoveOwner(){};


function* addOwner(){};

function* watchAddOwner(){};

