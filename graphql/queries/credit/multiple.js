import { GraphQLList } from 'graphql';

import { creditType } from '../../types/credit';
import Credits from '../../../models/credits';
import { checkSignedIn } from '../../middleware/auth';

export default {
    type: new GraphQLList(creditType),
    async resolve(parent, args, { req }) {

        checkSignedIn(req);

        return await Credits.find({});
    },
};