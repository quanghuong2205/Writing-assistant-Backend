'use strict';
const SIGN_TOKEN_FAIL = 101;
const VERIFY_TOKEN_FAIL = 102;
const INVALID_TOKEN = 103;
const INVALID_ACCESS_TOKEN = 104;
const INVALID_REFRESH_TOKEN = 104;

const OAUTH_SIGN_IN_OK = 701;
const OAUTH_MISS_AUTH_CODE = 702;
const OAUTH_INVALID_AUTH_CODE = 703;
const OAUTH_INVALID_ACCESS_TOKEN = 704;
const OAUTH_INVALID_REFRESH_TOKEN = 704;

const NOT_VERIFY_EMAIL = 801;

const VERIFY_MISS_CLIENT_ID = 901;
const VERIFY_MISS_ACCESS_TOKEN = 902;
const VERIFY_MISS_REFRESH_TOKEN = 903;

const OPENAI_CHECK_GRAMMAR_SUCCESS = 4953;
const OPENAI_PARAPHRASE_SUCCESS = 4954;
const OPENAI_TEXT_COMPLETION_SUCCESS = 4959;
const OPENAI_INVALID_API_KEY = 2205;
const OPENAI_OUT_OF_TOKEN = 2004;

const CHECK_PLAGIARISM_SUCCESS = '7777';

const MISS_PARAGRAPH = 5349;

module.exports = {
    SIGN_TOKEN_FAIL,
    VERIFY_TOKEN_FAIL,
    INVALID_TOKEN,
    INVALID_ACCESS_TOKEN,
    INVALID_REFRESH_TOKEN,
    OAUTH_SIGN_IN_OK,
    OAUTH_INVALID_AUTH_CODE,
    OAUTH_MISS_AUTH_CODE,
    OAUTH_INVALID_ACCESS_TOKEN,
    OAUTH_INVALID_REFRESH_TOKEN,
    NOT_VERIFY_EMAIL,
    VERIFY_MISS_CLIENT_ID,
    VERIFY_MISS_ACCESS_TOKEN,
    VERIFY_MISS_REFRESH_TOKEN,
    OPENAI_CHECK_GRAMMAR_SUCCESS,
    OPENAI_INVALID_API_KEY,
    OPENAI_OUT_OF_TOKEN,
    OPENAI_TEXT_COMPLETION_SUCCESS,
    OPENAI_PARAPHRASE_SUCCESS,
    MISS_PARAGRAPH,
    CHECK_PLAGIARISM_SUCCESS,
};
