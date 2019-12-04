import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, _superagent);

const API_ROOT = 'https://conduit.productionready.io/api';

const 