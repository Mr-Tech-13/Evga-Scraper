"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDMAsync = exports.sendNotification = void 0;
const philips_hue_1 = require("./philips-hue");
const sound_1 = require("./sound");
const apns_1 = require("./apns");
const desktop_1 = require("./desktop");
const discord_1 = require("./discord");
const email_1 = require("./email");
const gotify_1 = require("./gotify");
const mqtt_1 = require("./mqtt");
const pagerduty_1 = require("./pagerduty");
const pushbullet_1 = require("./pushbullet");
const pushover_1 = require("./pushover");
const slack_1 = require("./slack");
const sms_1 = require("./sms");
const telegram_1 = require("./telegram");
const twitter_1 = require("./twitter");
const twilio_1 = require("./twilio");
const twitch_1 = require("./twitch");
const redis_1 = require("./redis");
const streamlabs_1 = require("./streamlabs");
const freemobile_1 = require("./freemobile");
function sendNotification(link, store) {
    // Priority
    sound_1.playSound();
    discord_1.sendDiscordMessage(link, store);
    desktop_1.sendDesktopNotification(link, store);
    email_1.sendEmail(link, store);
    sms_1.sendSms(link, store);
    apns_1.sendApns(link, store);
    // Non-priority
    philips_hue_1.adjustPhilipsHueLights();
    gotify_1.sendGotifyNotification(link, store);
    mqtt_1.sendMqttMessage(link, store);
    pagerduty_1.sendPagerDutyNotification(link, store);
    pushbullet_1.sendPushbulletNotification(link, store);
    pushover_1.sendPushoverNotification(link, store);
    slack_1.sendSlackMessage(link, store);
    telegram_1.sendTelegramMessage(link, store);
    twitter_1.sendTweet(link, store);
    twilio_1.sendTwilioMessage(link, store);
    twitch_1.sendTwitchMessage(link, store);
    redis_1.updateRedis(link, store);
    streamlabs_1.sendStreamLabsAlert(link, store);
    freemobile_1.sendFreeMobileAlert(link, store);
}
exports.sendNotification = sendNotification;
async function sendDMAsync(service, payload) {
    let dmFunction = undefined;
    switch (service) {
        case 'slack':
            dmFunction = slack_1.sendDMAsync;
            break;
        case 'discord':
            dmFunction = discord_1.sendDMAsync;
            break;
        default:
            dmFunction = () => void 0;
    }
    await dmFunction(payload);
}
exports.sendDMAsync = sendDMAsync;
//# sourceMappingURL=notification.js.map