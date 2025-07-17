/// <reference path="./global.d.ts" />

import { version } from "core-js";

// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {
    name : name,
    age : age,
    ticketId : ticketId,
  };
  return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};
 * 
 * 
 * 
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * After a while, you get feedback from the employees that they want the ticket status to be easier to understand at the first glance. They only want to see either the name of the visitor or that the ticket is invalid.

Write a function simpleTicketStatus that accepts the same arguments as ticketStatus in task 3. This function only returns one of two different results.

the name of the visitor if the ticket was sold
'invalid ticket !!!' if the ticket was not sold yet or the identifier was not found in the tracking object

 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId];
  };
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

gtcVersion(visitorNew);
// => '2.1'

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

gtcVersion(visitorOld);
// => undefined
 * 
 * 
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (visitor.gtc && visitor.gtc.signed) {
    return visitor.gtc.version;
  } else {
    return undefined;
  }
}
