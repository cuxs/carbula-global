import React, { useState, Fragment, useCallback, useEffect } from 'react';
import { formatNumber, getCalendlyURL, getCatalogoURL } from '../../utils/helpers';
import Button from '../Button';
import styles from './cotization-form.module.scss';
import { Formik, Field } from 'formik';
import { object, mixed, number } from 'yup';
import RadioInput from '../RadioInput';
import { InlineWidget } from "react-calendly";

/********************************** DESKTOP ***********************************************/
/********************************** MOBILE ************************************************/