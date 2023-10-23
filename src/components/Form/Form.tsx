import React, { useState } from 'react';
import styles from './form.module.css';

interface FormData {
  name: string;
  surname: string;
  dateOfBirth: string;
  dream: string;
  profession: string;
  languages: string;
  country: string;
}

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    dateOfBirth: '',
    dream: '',
    profession: '',
    languages: '',
    country: '',
  });

  const handleInputChange = (input: string, value: string): void => {
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const submitForm = (): void => {
    // Здесь вы можете выполнить необходимые действия при отправке формы
    // console.log('Данные формы:', formData);
  };

  return (
    <div className={styles.formСontainer}>
      {step === 1 && (
        <div>
          <h2 className={styles.formHeading}>Шаг 1</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="Имя"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Фамилия"
            value={formData.surname}
            onChange={(e) => handleInputChange('surname', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Дата рождения"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          />
          <button onClick={nextStep}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className={styles.formHeading}>Шаг 2</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="Мечта"
            value={formData.dream}
            onChange={(e) => handleInputChange('dream', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Профессия"
            value={formData.profession}
            onChange={(e) => handleInputChange('profession', e.target.value)}
          />
          <button onClick={prevStep}>Назад</button>
          <button onClick={nextStep}>Далее</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className={styles.formHeading}>Шаг 3</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="Знание языков"
            value={formData.languages}
            onChange={(e) => handleInputChange('languages', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Моя страна"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
          <button onClick={prevStep}>Назад</button>
          <button onClick={submitForm}>Отправить</button>
        </div>
      )}
    </div>
  );
};

export default Form;
