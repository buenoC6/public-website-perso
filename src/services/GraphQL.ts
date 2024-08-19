import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageBlocksDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  nei: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBlocksBlocksHero = {
  __typename?: 'ComponentBlocksBlocksHero';
  Buttons: Maybe<Array<Maybe<ComponentCommonButton>>>;
  Content: Maybe<Scalars['String']['output']>;
  Headline: Maybe<Scalars['String']['output']>;
  Media: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentBlocksBlocksHeroButtonsArgs = {
  filters: InputMaybe<ComponentCommonButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksBlocksHeroMediaArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksCardGroup = {
  __typename?: 'ComponentBlocksCardGroup';
  Card: Maybe<Array<Maybe<ComponentCommonCard>>>;
  id: Scalars['ID']['output'];
};


export type ComponentBlocksCardGroupCardArgs = {
  filters: InputMaybe<ComponentCommonCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCommonButton = {
  __typename?: 'ComponentCommonButton';
  Href: Maybe<Scalars['String']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Variant: Maybe<Enum_Componentcommonbutton_Variant>;
  id: Scalars['ID']['output'];
};

export type ComponentCommonButtonFiltersInput = {
  Href: InputMaybe<StringFilterInput>;
  Label: InputMaybe<StringFilterInput>;
  Variant: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<ComponentCommonButtonFiltersInput>>>;
  not: InputMaybe<ComponentCommonButtonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentCommonButtonFiltersInput>>>;
};

export type ComponentCommonCard = {
  __typename?: 'ComponentCommonCard';
  Content: Maybe<Scalars['String']['output']>;
  Media: Maybe<UploadFileRelationResponseCollection>;
  Title: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentCommonCardMediaArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCommonCardFiltersInput = {
  Content: InputMaybe<StringFilterInput>;
  Title: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<ComponentCommonCardFiltersInput>>>;
  not: InputMaybe<ComponentCommonCardFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentCommonCardFiltersInput>>>;
};

export type ComponentCommonSeo = {
  __typename?: 'ComponentCommonSeo';
  Description: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  Visible: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentCommonSeoFiltersInput = {
  Description: InputMaybe<StringFilterInput>;
  Title: InputMaybe<StringFilterInput>;
  Visible: InputMaybe<BooleanFilterInput>;
  and: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
  not: InputMaybe<ComponentCommonSeoFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
};

export type ComponentCommonSeoInput = {
  Description: InputMaybe<Scalars['String']['input']>;
  Title: InputMaybe<Scalars['String']['input']>;
  Visible: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  nei: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentcommonbutton_Variant {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  nei: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = ComponentBlocksBlocksHero | ComponentBlocksCardGroup | ComponentCommonButton | ComponentCommonCard | ComponentCommonSeo | I18NLocale | Page | ReactIconsIconlibrary | SlugifySlug | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  nei: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  nei: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  nei: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createPage: Maybe<PageEntityResponse>;
  createPageLocalization: Maybe<PageEntityResponse>;
  createReactIconsIconlibrary: Maybe<ReactIconsIconlibraryEntityResponse>;
  createSlugifySlug: Maybe<SlugifySlugEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deletePage: Maybe<PageEntityResponse>;
  deleteReactIconsIconlibrary: Maybe<ReactIconsIconlibraryEntityResponse>;
  deleteSlugifySlug: Maybe<SlugifySlugEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updatePage: Maybe<PageEntityResponse>;
  updateReactIconsIconlibrary: Maybe<ReactIconsIconlibraryEntityResponse>;
  updateSlugifySlug: Maybe<SlugifySlugEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageLocalizationArgs = {
  data: InputMaybe<PageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput;
};


export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReactIconsIconlibraryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSlugifySlugArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Page = {
  __typename?: 'Page';
  Blocks: Maybe<Array<Maybe<PageBlocksDynamicZone>>>;
  Pagename: Scalars['String']['output'];
  SEO: Maybe<ComponentCommonSeo>;
  Slug: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Maybe<PageRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PageLocalizationsArgs = {
  filters: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlocksDynamicZone = ComponentBlocksBlocksHero | ComponentBlocksCardGroup | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes: Maybe<Page>;
  id: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  Pagename: InputMaybe<StringFilterInput>;
  SEO: InputMaybe<ComponentCommonSeoFiltersInput>;
  Slug: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  localizations: InputMaybe<PageFiltersInput>;
  not: InputMaybe<PageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  Blocks: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']['input']>>;
  Pagename: InputMaybe<Scalars['String']['input']>;
  SEO: InputMaybe<ComponentCommonSeoInput>;
  Slug: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  page: Maybe<PageEntityResponse>;
  pages: Maybe<PageEntityResponseCollection>;
  reactIconsIconlibraries: Maybe<ReactIconsIconlibraryEntityResponseCollection>;
  reactIconsIconlibrary: Maybe<ReactIconsIconlibraryEntityResponse>;
  slugifySlug: Maybe<SlugifySlugEntityResponse>;
  slugifySlugs: Maybe<SlugifySlugEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPagesArgs = {
  filters: InputMaybe<PageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReactIconsIconlibrariesArgs = {
  filters: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReactIconsIconlibraryArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySlugifySlugArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySlugifySlugsArgs = {
  filters: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReactIconsIconlibrary = {
  __typename?: 'ReactIconsIconlibrary';
  abbreviation: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  isEnabled: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ReactIconsIconlibraryEntity = {
  __typename?: 'ReactIconsIconlibraryEntity';
  attributes: Maybe<ReactIconsIconlibrary>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ReactIconsIconlibraryEntityResponse = {
  __typename?: 'ReactIconsIconlibraryEntityResponse';
  data: Maybe<ReactIconsIconlibraryEntity>;
};

export type ReactIconsIconlibraryEntityResponseCollection = {
  __typename?: 'ReactIconsIconlibraryEntityResponseCollection';
  data: Array<ReactIconsIconlibraryEntity>;
  meta: ResponseCollectionMeta;
};

export type ReactIconsIconlibraryFiltersInput = {
  abbreviation: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  isEnabled: InputMaybe<BooleanFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ReactIconsIconlibraryInput = {
  abbreviation: InputMaybe<Scalars['String']['input']>;
  isEnabled: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SlugifySlug = {
  __typename?: 'SlugifySlug';
  count: Maybe<Scalars['Int']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SlugifySlugEntity = {
  __typename?: 'SlugifySlugEntity';
  attributes: Maybe<SlugifySlug>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SlugifySlugEntityResponse = {
  __typename?: 'SlugifySlugEntityResponse';
  data: Maybe<SlugifySlugEntity>;
};

export type SlugifySlugEntityResponseCollection = {
  __typename?: 'SlugifySlugEntityResponseCollection';
  data: Array<SlugifySlugEntity>;
  meta: ResponseCollectionMeta;
};

export type SlugifySlugFiltersInput = {
  and: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count: InputMaybe<IntFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<SlugifySlugFiltersInput>;
  or: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  slug: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  nei: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  ext: Maybe<Scalars['String']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  folder: InputMaybe<UploadFolderFiltersInput>;
  folderPath: InputMaybe<StringFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  id: InputMaybe<IdFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  ext: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  folderPath: InputMaybe<Scalars['String']['input']>;
  formats: InputMaybe<Scalars['JSON']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  mime: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  previewUrl: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children: InputMaybe<UploadFolderFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  files: InputMaybe<UploadFileFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFolderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent: InputMaybe<UploadFolderFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  pathId: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  parent: InputMaybe<Scalars['ID']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
  pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  confirmationToken: InputMaybe<StringFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  email: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  resetPasswordToken: InputMaybe<StringFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken: InputMaybe<Scalars['String']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetLocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocalesQuery = { __typename?: 'Query', i18NLocales: { __typename?: 'I18NLocaleEntityResponseCollection', data: Array<{ __typename?: 'I18NLocaleEntity', attributes: { __typename?: 'I18NLocale', code: string } }> } };

export type GetPageQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  filters: InputMaybe<PageFiltersInput>;
}>;


export type GetPageQuery = { __typename?: 'Query', pages: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes: { __typename?: 'Page', Blocks: Array<{ __typename: 'ComponentBlocksBlocksHero', Headline: string, Content: string, Media: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } }> }, Buttons: Array<{ __typename?: 'ComponentCommonButton', Label: string, Variant: Enum_Componentcommonbutton_Variant, Href: string }> } | { __typename: 'ComponentBlocksCardGroup', Card: Array<{ __typename?: 'ComponentCommonCard', Title: string, Content: string, Media: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } }> } }> } | { __typename: 'Error' }> } }> } };

export type GetPagesQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetPagesQuery = { __typename?: 'Query', pages: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes: { __typename: 'Page', Pagename: string, Slug: string, SEO: { __typename?: 'ComponentCommonSeo', Title: string, Description: string, Visible: boolean }, Blocks: Array<{ __typename: 'ComponentBlocksBlocksHero', Headline: string, Content: string, Media: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } }> }, Buttons: Array<{ __typename?: 'ComponentCommonButton', Label: string, Variant: Enum_Componentcommonbutton_Variant, Href: string }> } | { __typename: 'ComponentBlocksCardGroup', Card: Array<{ __typename?: 'ComponentCommonCard', Title: string, Content: string, Media: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } }> } }> } | { __typename: 'Error' }> } }> } };

export type MediaFieldsFragment = { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } }> };

export const MediaFieldsFragmentDoc = gql`
    fragment MediaFields on UploadFileRelationResponseCollection {
  data {
    attributes {
      url
    }
  }
}
    `;
export const GetLocalesDocument = gql`
    query getLocales {
  i18NLocales(pagination: {limit: 1000}) {
    data {
      attributes {
        code
      }
    }
  }
}
    `;
export const GetPageDocument = gql`
    query getPage($locale: I18NLocaleCode, $filters: PageFiltersInput) {
  pages(locale: $locale, filters: $filters, pagination: {limit: 1000}) {
    data {
      attributes {
        Blocks {
          __typename
          ... on ComponentBlocksBlocksHero {
            Headline
            Content
            Media {
              ...MediaFields
            }
            Buttons {
              Label
              Variant
              Href
            }
          }
          ... on ComponentBlocksCardGroup {
            Card {
              Title
              Content
              Media {
                ...MediaFields
              }
            }
          }
        }
      }
    }
  }
}
    ${MediaFieldsFragmentDoc}`;
export const GetPagesDocument = gql`
    query getPages($locale: I18NLocaleCode) {
  pages(locale: $locale, pagination: {limit: 1000}) {
    data {
      attributes {
        __typename
        Pagename
        Slug
        SEO {
          Title
          Description
          Visible
        }
        Blocks {
          __typename
          ... on ComponentBlocksBlocksHero {
            Headline
            Content
            Media {
              ...MediaFields
            }
            Buttons {
              Label
              Variant
              Href
            }
          }
          ... on ComponentBlocksCardGroup {
            Card {
              Title
              Content
              Media {
                ...MediaFields
              }
            }
          }
        }
      }
    }
  }
}
    ${MediaFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLocales(variables?: GetLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLocalesQuery>(GetLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocales', 'query', variables);
    },
    getPage(variables?: GetPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageQuery>(GetPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPage', 'query', variables);
    },
    getPages(variables?: GetPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPagesQuery>(GetPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPages', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;