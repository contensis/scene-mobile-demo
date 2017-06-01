
export function posterImage(movie, size) {
	// todo: empty / holder image
	let imageId = 'e4a1d6d2-8365-4532-b186-9b8552e75aaf';
	if (movie && movie.posterImage && movie.posterImage.asset && movie.posterImage.asset.sys && movie.posterImage.asset.sys.id) {
		imageId = movie.posterImage.asset.sys.id;
	}

	return `http://cms-moviedb-develop.cloud.contensis.com/ui/assets/image?fileId=${imageId}&width=${size}&height=${size}`;
}

export function releaseYear(movie) {
	try {
		if (movie && movie.releaseDate) {
			let dt = new Date(movie.releaseDate);
			return dt.getFullYear();
		}
	} catch (e) {

	}
	return '';
}

export function releaseDate(movie) {
	try {
		if (movie && movie.releaseDate) {
			let dt = new Date(movie.releaseDate);
			return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
		}
	} catch (e) {

	}
	return '';
}