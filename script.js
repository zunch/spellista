let player;
const intervals = [
    { videoId: 'G4eUuORg1FQ', start: 0, end: 43 },
    { videoId: 'G4eUuORg1FQ', start: 170, end: 422 },
    { videoId: 'G4eUuORg1FQ', start: 933, end: 1150 },
    { videoId: 'G4eUuORg1FQ', start: 1310, end: 1507 },
    { videoId: 'G4eUuORg1FQ', start: 2140, end: 2507 }
];
let currentIndex = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: intervals[currentIndex].videoId,
        playerVars: {
            start: intervals[currentIndex].start,
            end: intervals[currentIndex].end
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        playNext();
    }
}

function playNext() {
    currentIndex = (currentIndex + 1) % intervals.length;
    player.loadVideoById({
        videoId: intervals[currentIndex].videoId,
        startSeconds: intervals[currentIndex].start,
        endSeconds: intervals[currentIndex].end
    });
}
