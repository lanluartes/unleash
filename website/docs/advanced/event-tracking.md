---
id: event-tracking
title: Tracking events
---

# Tracking events

If you're not using analytics to track how your end users are
interacting with your products, you're missing out on valuable
insight: seeing how your customers move and react to changes you make
is a key skill in today's world.

Unleash lets you track whenever a toggle state is queried in your
application. You can use this together with your pre-existing analytics
code to get more detailed insights into who sees what and how it
impacts them. Want to know whether your red call to action button
performs better than your blue one? Unleash can help you find out.

> Unleash currently emits events for all toggles all the time. Because
> this is in very early stages, this may change in a future release.

## How it works

To make it easier to track what features a user sees, the Unleash
clients emit events whenever your application asks about the state of
a feature. You can subscribe to these events and handle them however
you want to. Events in client SDKs are also automatically forwarded to
the Unleash proxy.

If you're using an analytics service such as Google Analytics or
Matomo, you can inspect the event, enrich it with extra data,
transform it to fit your needs, and then pass it on to your analytics
service. You can of course also send it to an internal data lake or to
a customer data platform such as Segment or RudderStack.

The following diagram shows a conceptual overview of how this works.

[insert diagram here]

Of course, you can forward the events to as many services as you want to.

## Sending events directly from the app vs sending events via the proxy

Client and server SDKs treat events a little differently:

### Client SDKs

Because events are propagated to the proxy, you can send them to your
analytics tools either directly from the front end or via the proxy.
They both have their own advantages and drawbacks.

If you're using a popular analytics framework, you probably already
integrate with the framework in your client code. When you send them
data, it is automatically enriched with data about the user. If you
use the same integration to send your unleash events to the analytics
tools, you'll be able to more accurately correlate the events from
Unleash with the rest of the events from your app.

However, if you have an API key or something else that needs to stay
out of the hands of (malicious) users, then using the proxy is the way
to go. Events in the client are automatically forwarded to the proxy,
where you can subscribe to them and do whatever you need to them.

### Server-side SDKs

Server-side SDKs can also send data to the Unleash proxy if you want
them to. Because they don't rely on the proxy to evaluate toggles,
they don't do this by default.

This means that if you have configured your proxy to take care of
forwarding events to your sinks, then you don't need to do this again
in your clients; just send stuff to the proxy.

Of course, you can also send data directly to your sinks if that is
more convenient for you.