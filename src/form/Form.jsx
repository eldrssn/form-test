import React  from 'react';
import * as z from "zod";
import classnames from 'classnames/bind';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { columns, defaultCard } from '../other/helpers/constants';
import { Button } from '../other/button';
import styles from '../new-card-form/new-card-form.module.scss';
import { ErrorPopup } from '../other/error-popup';
import { Spinner } from '../other/spinner';

const cn = classnames.bind(styles);

const schema = z.object({
  name: z.string().nonempty({
    message: "Название обязательно",
  }),
  description: z.string(),
  type: z.string().nonempty({
    message: "Выберите колонку",
  }),
});

const Form = ({ handleSubmitForm, handleGetPhotoDebounced, dataFromServer, errorMessage }) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: defaultCard,
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const handleReset = () => reset(defaultCard);

  const onSubmit = (data) => {
    handleSubmitForm(data);
    handleReset();
  }
  return (
    <form
    className={styles['new-card']}
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="off"
  >
    <Button
      onClick={handleGetPhotoDebounced}
      title="Выбрать другое изображение"
    />

    {dataFromServer.url ? <img src={dataFromServer.url} alt="cards cover" /> : <Spinner />}

    <input
      className={cn('input', {
        error: !!errors.name,
      })}
      {...register("name")}
      type="text"
      placeholder="Введите название"
    />
    {errors.name && <p className={styles['error-descripton']}>{errors.name.message}</p>}

    <textarea
      {...register("description")}
      placeholder="Введите описание"
    />

    <label htmlFor="type">Колонка: </label>
      <select 
        className={cn({ error: !!errors.type })}
        {...register("type")} 
        id="type" 
      >
        {columns.map((column) => {
          return <option key={column.key} value={column.key}>{column.title}</option>
        })}
    </select>
    {errors.type && <p className={styles['error-descripton']}>{errors.type.message}</p>}


    <div className={styles['new-card_buttons']}>
      <Button type="submit" title="Ок" />
      <Button onClick={handleReset} title="Отмена" />
    </div>
    

    {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
  </form>
  );
};

export default Form;