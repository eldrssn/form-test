import React, { useState, useEffect } from 'react';
import { useDebounce } from '../other/hooks/useDebounce';
import { request } from '../other/api';
import { getRandomId } from '../other/helpers/getUniqId';
import Form from '../form/Form';
import { DEBOUNCE_DELAY } from '../other/helpers/constants';

export const NewCardForm = ({ setShowNewCardForm }) => {

  const [dataFromServer, setDataFromServer] = useState({id:'', url:''});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSuccess = (response) => {
    setDataFromServer({
      id: response.data.id,
      url: response.data.url,
    });
  };

  const handleError = (error) => {
    setErrorMessage(error.message);
  };

  const getImgUrl = () => {
    const id = getRandomId();
    
    request({
      url: String(id),
      handleSuccess,
      handleError,
    });
  };

  const handleSubmitForm = (data) => {
    console.log({...data, id: dataFromServer.id, url: dataFromServer.url});
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  const handleGetPhotoDebounced = useDebounce(getImgUrl, DEBOUNCE_DELAY);

  return (
    <Form 
      handleSubmitForm={handleSubmitForm}
      handleGetPhotoDebounced={handleGetPhotoDebounced}
      dataFromServer={dataFromServer}
      errorMessage={errorMessage}
      />
  );
};
