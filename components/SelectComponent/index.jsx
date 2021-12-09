import Select from "react-select";
import styles from './select.module.scss';
import classnames from "classnames";
import { MIN_TEXT_SEARCH_LENGTH } from "../../utils/constants";
const SelectComponent = ({ isLoading, options, large, placeholder, disabled, inputValue, onInputChange, onChange, onBlur, renderNoOptionMessage, name, defaultValue, big }) => {
  const selectClassname = classnames({
    select__container: !large,
    'select__container--large': large,
  })
  const bigStyles = {
    control: (provided, state) => {
      let borderBottom = '1px solid #4B4B4B'
      if (state.isFocused) borderBottom = '1px solid #3074F1'
      if (state.isDisabled) borderBottom = '1px solid #AAAAAA'
      return ({
        ':hover': {
          borderColor: state.isFocused ? '#3074F1 !important' : '#4B4B4B',
        },
        ':active': {
          boxShadow: 'none'
        },
        backgroundColor: 'white',
        color: '#4B4B4B',
        height: '80px',
        border: 'none',
        borderStyle: undefined,
        borderWidth: undefined,
        borderRadius: undefined,
        borderBottom,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        fontFamily: 'ProximaNova',
        // width: large ? '480px' : '130px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms',
        boxSizing: 'border-box',
        minHeight: '38px',
        zIndex: 1,
        fontSize: '48px',

        // ...provided,
      })
    },
    input: (provided) => ({
      height: '80px',
      marginLeft: '-100px',
      width: '60px',
      fontSize: '48px'
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '80px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      cursor: 'pointer'
    }),
    dropdownIndicator: (provided, state) => {
      let color = '#4B4B4B';
      if (state.isActive || state.isFocused) color = '#3074F1'
      if (state.isDisabled) color = '#AAAAAA'
      return ({
        ...provided,
        ':hover': {
          color: '#3074F1'
        },
        color,
        svg: {
          width: '50px',
          height: '50px',
        },
        cursor: 'pointer'

      })
    },
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? '#AAAAAA' : '#4b4b4b',
      fontSize: '48px'
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 100,
      fontSize: '48px'
    }),
    singleValue: (provided, state) => ({
      ...provided,
      marginLeft: '90px', //lo que ocupa el dropdown
      letterSpacing: '1.5px'
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
    })
  }
  const customStyles = {
    control: (provided, state) => {
      let borderBottom = '1px solid #4B4B4B'
      if (state.isFocused) borderBottom = '1px solid #3074F1'
      if (state.isDisabled) borderBottom = '1px solid #AAAAAA'
      return ({
        ':hover': {
          borderColor: state.isFocused ? '#3074F1 !important' : '#4B4B4B',
        },
        ':active': {
          boxShadow: 'none'
        },
        backgroundColor: 'white',
        color: '#4B4B4B',
        height: '48px',
        border: 'none',
        borderStyle: undefined,
        borderWidth: undefined,
        borderRadius: undefined,
        borderBottom,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        fontFamily: 'ProximaNova',
        // width: large ? '280px' : '130px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms',
        boxSizing: 'border-box',
        minHeight: '38px',
        zIndex: 1,
        // ...provided,
      })
    },
    input: (provided) => ({
      height: '48px',
      marginLeft: '0px',
      width: '60px'
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '48px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      cursor: 'pointer'
    }),
    dropdownIndicator: (provided, state) => {
      let color = '#4B4B4B';
      if (state.isActive || state.isFocused) color = '#3074F1'
      if (state.isDisabled) color = '#AAAAAA'
      return ({
        ...provided,
        ':hover': {
          color: '#3074F1'
        },
        color,
        cursor: 'pointer'

      })
    },
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? '#AAAAAA' : '#4b4b4b',
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 100
    })
  }



  return (
    <div className={styles[selectClassname]}>
      <Select
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onInputChange={onInputChange}
        inputValue={inputValue}
        isDisabled={disabled}
        placeholder={placeholder}
        styles={big ? bigStyles : customStyles}
        loadingMessage={() => 'Cargando...'}
        isLoading={isLoading}
        noOptionsMessage={renderNoOptionMessage}
        defaultValue={defaultValue}
        options={options} />
    </div>
  )
}
export default SelectComponent