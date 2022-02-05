require('dotenv').config({ path: __dirname + '../../.env' });
const request = require('request');
const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({
	apiKey: 'eu1-783c-6a1f-44f6-9e0f-f134e3358df3'
});

// find hubspot contact by email
exports.findHubspotContactByEmail = async (email) => {
	const options = {
		method: 'GET',
		url: `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`,
		qs: { hapikey: process.env.HUBSPOT_API_KEY }
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		const user = JSON.parse(body);
		const id = user.vid;
		return id;
	});
};

// associate contact to ticket
exports.associateContactToTicket = async (contact, ticket) => {
	// asscociate found user to ticket by id
	const BatchInputPublicAssociation = {
		inputs: [
			{
				from: { id: contact.vid },
				to: { id: ticket.id },
				type: 'contact_to_ticket'
			}
		]
	};

	// from object type contact
	const fromObjectType = 'contact';
	// to object type ticket
	const toObjectType = 'ticket';

	try {
		const associationResponse =
			await hubspotClient.crm.associations.batchApi.create(
				fromObjectType,
				toObjectType,
				BatchInputPublicAssociation
			);
		console.log(JSON.stringify(associationResponse.body, null, 2));
	} catch (e) {
		e.message === 'HTTP request failed'
			? console.error(JSON.stringify(e.response, null, 2))
			: console.error(e);
	}
};
export {}