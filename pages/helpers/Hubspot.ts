import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

// ADD CLASS
class hubspot {
	async storeNewContact(values) {
		this.makeRequest(`/hubspot/contacts/add`, values);
	}

	async makeRequest(endpoint, values) {
		// check that form fields are filled
		const hasEmptyFields = Object.values(values).some(
			(element) => element === ''
		);
		//@TODO Do not add Form Validation here, Just handle the hubspot related stuff and their error
		if (hasEmptyFields) {
			toast.error('Please fill in all fields');
		} else {
			console.log('> posting data.......waiting for response.......>>>>>>>>>>');
			// make post request to our backend express server
			const res = await fetch(endpoint, {
				headers: {
					'Content-type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(values)
			});
		}
	}

	async contactUs(values) {
		this.makeRequest(`/submit/ticket`, values);
	}
}
export const Hubspot = new hubspot();
