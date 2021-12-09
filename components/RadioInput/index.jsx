import classnames from 'classnames';
import styles from './radio.module.scss';
import { Field } from 'formik';

const RadioInput = ({ options, name, value, vertical, touched, onBlur, submitOnClick, boldOption }) => {
  const selectedValue = value;

  const renderClassname = (selectedValue, row) => {
    if (boldOption) {
      if (selectedValue && selectedValue[0] === row[0]) {
        return styles['option__button--selected']
      }
      if (touched) {
        return styles['option__button--touched']
      }
      return styles['option__button']
    }
    if (selectedValue === row) {
      return styles['option__button--selected']
    }
    if (touched) {
      return styles['option__button--touched']
    }
    return styles['option__button']
  }

  return (
    <div className={vertical ? styles['radio__container--vertical'] : styles.radio__container}>
      {options.map((row) => (
        <Field name={name} id={name} type="radio" value={row} key={row}>
          {({ field: { value }, form: { setFieldValue, setFieldTouched, submitForm} }) => {
            const handleOptionClick = async () => {
              await setFieldValue(name, value)
              await setFieldTouched(name)
              if(submitOnClick){
                setTimeout(() => {
                  submitForm()
                }, 0);
              }
            }
            return (
              <div
                id={row}
                name={row}
                className={renderClassname(selectedValue, row)}
                onClick={handleOptionClick}
              >
                {boldOption ?
                  <p><b>{row[0]}</b> {row[1]}</p>
                  : <p>{row}</p>}

              </div>
            )
          }}
        </Field>
      ))}
    </div>
  )
}

export default RadioInput