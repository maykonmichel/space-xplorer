import {FieldPolicy, TypePolicy} from '@apollo/client';
import {format} from 'date-fns';

const launch_date_formatted: FieldPolicy<string> = {
  read: (existing, {readField}) => {
    const unix = readField<number>('launch_date_unix') || 0;
    return format(unix, 'MM/dd/yyyy hh:mmaaa');
  },
};

const Launch: TypePolicy = {
  fields: {
    launch_date_formatted,
  },
};

export default Launch;
