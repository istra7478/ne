const path = require('path')

const dir = path.join(__dirname)

process.env.NODE_ENV = 'production'
process.chdir(__dirname)

// ✅ مهم: جلوگیری از ::1 مشکل
const currentPort = parseInt(process.env.PORT, 10) || 3000
const hostname = process.env.HOSTNAME || '0.0.0.0'

let keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10)

if (
  Number.isNaN(keepAliveTimeout) ||
  !Number.isFinite(keepAliveTimeout) ||
  keepAliveTimeout < 0
) {
  keepAliveTimeout = undefined
}

// Next config (همون خودت، دست نخورده)
const nextConfig = {/* همون چیز طولانی خودت */}

// inject config
process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)

require('next')
const { startServer } = require('next/dist/server/lib/start-server')

// 🚀 اصلاح مهم: bind به همه IP ها
startServer({
  dir,
  isDev: false,
  config: nextConfig,
  hostname: '0.0.0.0', // 👈 این خیلی مهمه
  port: currentPort,
  allowRetry: false,
  keepAliveTimeout,
}).catch((err) => {
  console.error(err)
  process.exit(1)
})