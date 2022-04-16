import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";

export const redis = new Redis(
  6379, // process.env.REDIS_PORT,
  "127.0.0.1" // process.env.REDIS_HOST_ADDRESS
);

export const pubsub = new RedisPubSub({
  publisher: redis,
  subscriber: redis
});