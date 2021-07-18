import {FieldPolicy, Reference, TypePolicy} from '@apollo/client';
import {sortBy} from 'ramda';

const launchesPast: FieldPolicy<Reference[]> = {
  read: (existing = [], {readField}) =>
    sortBy<Reference>(
      ref => readField<string>('launch_date_local', ref) || '',
      existing,
    ),
};

const Query: TypePolicy = {
  fields: {
    launchesPast,
  },
};

export default Query;
