
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ActiveGamePlayScalarFieldEnum = makeEnum({
  id: 'id',
  player_id: 'player_id',
  game_id: 'game_id',
  maxWin: 'maxWin',
  startedAt: 'startedAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AdminBalanceTransactionsScalarFieldEnum = makeEnum({
  id: 'id',
  account: 'account',
  beforeRecharge: 'beforeRecharge',
  recharged: 'recharged',
  redeemed: 'redeemed',
  afterRecharge: 'afterRecharge',
  cashier: 'cashier',
  balanceBefore: 'balanceBefore',
  balanceAfter: 'balanceAfter',
  remark: 'remark',
  createdAt: 'createdAt'
});

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  id: 'id',
  email_id: 'email_id',
  username: 'username',
  password: 'password',
  balance: 'balance',
  setting_id: 'setting_id',
  status: 'status',
  account_type: 'account_type',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  created_by: 'created_by',
  master_id: 'master_id',
  totalSpent: 'totalSpent',
  totalRedeem: 'totalRedeem',
  totalLost: 'totalLost'
});

exports.Prisma.FavoriteGameScalarFieldEnum = makeEnum({
  id: 'id',
  gameId: 'gameId',
  playerId: 'playerId',
  status: 'status'
});

exports.Prisma.FishGameTransactionsScalarFieldEnum = makeEnum({
  id: 'id',
  room_id: 'room_id',
  player_id: 'player_id',
  game_id: 'game_id',
  started: 'started',
  ended: 'ended'
});

exports.Prisma.GameAssetsScalarFieldEnum = makeEnum({
  id: 'id',
  game_id: 'game_id',
  platform: 'platform',
  path: 'path',
  version: 'version',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GameTransactionsScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  player: 'player',
  game: 'game',
  spent: 'spent',
  won: 'won',
  winType: 'winType',
  game_id: 'game_id',
  player_id: 'player_id',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GamesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  played: 'played',
  status: 'status'
});

exports.Prisma.PlayerBalanceTransactionsScalarFieldEnum = makeEnum({
  id: 'id',
  admin: 'admin',
  player: 'player',
  beforeRecharge: 'beforeRecharge',
  recharged: 'recharged',
  redeem: 'redeem',
  afterRecharge: 'afterRecharge',
  ip_address: 'ip_address',
  income: 'income',
  remark: 'remark',
  createdAt: 'createdAt'
});

exports.Prisma.PlayerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  username: 'username',
  password: 'password',
  phone_number: 'phone_number',
  country_code: 'country_code',
  status: 'status',
  balance: 'balance',
  game_played: 'game_played',
  won: 'won',
  spent: 'spent',
  won_total: 'won_total',
  spent_total: 'spent_total',
  grandJP_won: 'grandJP_won',
  grandJP_won_count: 'grandJP_won_count',
  majorJP_won: 'majorJP_won',
  majorJP_won_count: 'majorJP_won_count',
  minorJP_won: 'minorJP_won',
  minorJP_won_count: 'minorJP_won_count',
  miniJP_won: 'miniJP_won',
  miniJP_won_count: 'miniJP_won_count',
  general_won: 'general_won',
  general_won_count: 'general_won_count',
  setting_id: 'setting_id',
  created_by: 'created_by'
});

exports.Prisma.PlayerTokenScalarFieldEnum = makeEnum({
  id: 'id',
  playerId: 'playerId',
  token: 'token'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RefreshTokenScalarFieldEnum = makeEnum({
  id: 'id',
  token: 'token',
  blacklisted: 'blacklisted'
});

exports.Prisma.SettingsScalarFieldEnum = makeEnum({
  id: 'id',
  grandJP: 'grandJP',
  grandJP_limit: 'grandJP_limit',
  majorJP: 'majorJP',
  majorJP_limit: 'majorJP_limit',
  minorJP: 'minorJP',
  minorJP_limit: 'minorJP_limit',
  miniJP: 'miniJP',
  miniJP_limit: 'miniJP_limit',
  grandScore: 'grandScore',
  majorScore: 'majorScore',
  minorScore: 'minorScore',
  miniScore: 'miniScore',
  miniShareNum: 'miniShareNum',
  maxShareNum: 'maxShareNum',
  minHolding: 'minHolding',
  maxHolding: 'maxHolding',
  holding: 'holding',
  dollarStatus: 'dollarStatus',
  account_type: 'account_type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SlotFreeBonusScalarFieldEnum = makeEnum({
  id: 'id',
  player_id: 'player_id',
  game_id: 'game_id',
  total_spin: 'total_spin',
  remaining_spin: 'remaining_spin',
  start_balance: 'start_balance',
  won_amount: 'won_amount',
  price_used: 'price_used',
  max_win_amount: 'max_win_amount',
  no_of_win_round: 'no_of_win_round',
  multiplier: 'multiplier',
  free_round_win: 'free_round_win',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SpinTimeScalarFieldEnum = makeEnum({
  id: 'id',
  playerId: 'playerId',
  enabled: 'enabled',
  renewOn: 'renewOn',
  timeLeft: 'timeLeft'
});
exports.AccountStatus = makeEnum({
  ACTIVE: 'ACTIVE',
  DISABLE: 'DISABLE'
});

exports.AccountType = makeEnum({
  PRIMARY_ADMIN: 'PRIMARY_ADMIN',
  ADMIN: 'ADMIN',
  MASTER: 'MASTER',
  DISTRIBUTOR: 'DISTRIBUTOR',
  SUB_DISTRIBUTOR: 'SUB_DISTRIBUTOR',
  STORE: 'STORE',
  CASHIER: 'CASHIER'
});

exports.GamePlatform = makeEnum({
  ios: 'ios',
  android: 'android',
  webGl: 'webGl'
});

exports.Prisma.ModelName = makeEnum({
  Admin: 'Admin',
  AdminBalanceTransactions: 'AdminBalanceTransactions',
  Settings: 'Settings',
  FavoriteGame: 'FavoriteGame',
  PlayerToken: 'PlayerToken',
  SpinTime: 'SpinTime',
  Player: 'Player',
  Games: 'Games',
  GameAssets: 'GameAssets',
  ActiveGamePlay: 'ActiveGamePlay',
  GameTransactions: 'GameTransactions',
  FishGameTransactions: 'FishGameTransactions',
  SlotFreeBonus: 'SlotFreeBonus',
  RefreshToken: 'RefreshToken',
  PlayerBalanceTransactions: 'PlayerBalanceTransactions'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
