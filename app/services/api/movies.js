import { Client, Query, Op, OrderBy } from 'api-delivery-js';

function createClient() {
	return Client.create({
		rootUrl: 'http://cms-moviedb-develop.cloud.contensis.com', // 'https://cms-rocket-01.cloud.contensis.com',
    	accessToken: 'Soym9a7jU84qSSk00ajkRDvo1b3euKNwi2DZtpb6IlrTzvGG',
    	projectId: 'website',
    	language: 'en-GB',
    	versionStatus: 'published',
    	pageSize: 50
	});
}

export function latest10Movies() {
	let client = createClient();
	return client.entries.list({
		contentTypeId: 'movie',
		pageOptions: { pageIndex: 0, pageSize: 10 },
		order: ['-releaseDate']
	}).then(movies => movies.items);
}

export function searchMovies(searchText) {
	let query = new Query(
		Op.contains('title', searchText),
		Op.equalTo('sys.contentTypeId', 'movie'),
		Op.equalTo('sys.versionStatus', 'published')
	);
	query.orderBy = OrderBy.asc('title');
	query.pageIndex = 0;
	query.pageSize = 50;

	let client = createClient();
	return client.entries.search(query);
}