const channelID = 'UCWeh8mivUKYu8zrqY1QgO7A';
const playlistID = 'PLuBdslvHkgkN8_t-s2OjVBKhqn02ML35L';

$(document).ready(() => {
	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part: 'contentDetails',
			id: channelID,
			key: 'AIzaSyCybzl30SVrlW_N3aU0eLZ97AwR_I7rM9U'
		},

		(data) => {
			$.each(data.items, (i, item) => {
				console.log(item);
				pID = item.contentDetails.relatedPlaylists.uploads;
				getVids(pID);
			})
		}
	);

	const getVids = (pID) => {
		$.get(
			"https://www.googleapis.com/youtube/v3/playlists", {
				part: 'snippet',
				maxResults: 3,
				id: playlistID,
				key: 'AIzaSyCybzl30SVrlW_N3aU0eLZ97AwR_I7rM9U'
			},

			(data) => {

				let output;
				$.each(data.items, (i, item) => {
					
					videTitle = item.snippet.title;
					videoId = item.id;

					output = '<iframe class="cover-video" src=\"//www.youtube.com/embed/videoseries?list='+videoId+'\&showinfo=0"frameborder="0" allowfullscreen>';

					$('#results').append(output);
				})
			}
		);
	}
});