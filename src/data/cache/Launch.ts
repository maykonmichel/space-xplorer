import {FieldPolicy, TypePolicy} from '@apollo/client';
import {format} from 'date-fns';

const launch_date_formatted: FieldPolicy<string> = {
  read: (existing, {readField}) => {
    const date = readField<string>('launch_date_local') || '';
    return format(new Date(date), 'MM/dd/yyyy hh:mmaaa');
  },
};

const Launch: TypePolicy = {
  fields: {
    launch_date_formatted,
  },
};

export default Launch;
