(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[0],{
    27:function(e,t,a){e.exports=a(43)},
    36:function(e,t,a){},
    37:function(e,t,a){},
    38:function(e,t,a){},
    39:function(e,t,a){},
    40:function(e,t,a){},
    42:function(e,t,a){},
    43:function(e,t,a){
        "use strict"; a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),s=a(9),l=a(13),c=a(2),u={
            SET_SONG_DATA:"SET_SONG_DATA",
            SET_SONG_DURATION:"SET_SONG_DURATION",
            SET_LYRICS_DATA:"SET_LYRICS_DATA",
            SET_PLAYLIST_DATA:"SET_PLAYLIST_DATA",
            FETCH_PLAYLIST_BEGIN:"FETCH_PLAYLIST_BEGIN",
            FETCH_PLAYLIST_FAILURE:"FETCH_PLAYLIST_FAILURE",
            SET_CURRENT_SONG_INDEX:"SET_CURRENT_SONG_INDEX",
            SET_AUDIO_DATA:"SET_AUDIO_DATA",
            SET_PLAY_STATE:"SET_PLAY_STATE",
            SHOW_PLAYLIST:"SHOW_PLAYLIST"
        },
        d={
            song_name:void 0,
            artist_name:void 0,
            song_duration:void 0,
            song_album_art:void 0,
            song_audio_link:void 0,
            song_lyrics_data:void 0,
            song_lyrics_link:void 0,
            play:!1
        };
        var p={
            playlistData:void 0,
            loading:!1,
            error:null,
            currentSongIndex:void 0,
            audioData:void 0,
            showPlaylist:!1
        };
        var m=Object(l.c)({
            song:function(){
                var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,
                t=arguments.length>1?arguments[1]:void 0;
                switch(t.type){
                    case u.SET_SONG_DATA:return Object(c.a)(Object(c.a)({},e),{
                    },{
                        song_name:t.payload.song_name,
                        artist_name:t.payload.artist_name,
                        song_album_art:t.payload.song_album_art,
                        song_lyrics_link:t.payload.song_lyrics_link,
                        song_audio_link:t.payload.song_audio_link
                    });
                    case u.SET_SONG_DURATION:return Object(c.a)(Object(c.a)({},e),{
                    },{
                        song_duration:t.payload.song_duration
                    });
                    case u.SET_LYRICS_DATA:return Object(c.a)(Object(c.a)({},e),{
                    },{
                        song_lyrics_data:t.payload.song_lyrics_data
                    });
                    case u.SET_PLAY_STATE:return Object(c.a)(Object(c.a)({},e),{},{
                        play:t.payload.play
                    });
                    default:return Object(c.a)({},e)
                }
            },playlist:function(){
                var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;
                switch(t.type){
                    case u.FETCH_PLAYLIST_BEGIN:return Object(c.a)(Object(c.a)({},e),{},{
                        loading:!0,error:null
                    });
                    case u.FETCH_PLAYLIST_FAILURE:return Object(c.a)(Object(c.a)({},e),{},{
                        loading:!1,error:t.payload.error
                    });
                    case u.SET_PLAYLIST_DATA:return Object(c.a)(Object(c.a)({},e),{},{
                        loading:!1,playlistData:t.payload.playlistData,error:null
                    });
                    case u.SET_CURRENT_SONG_INDEX:return Object(c.a)(Object(c.a)({},e),{},{
                        currentSongIndex:t.payload.currentSongIndex
                    });
                    case u.SET_AUDIO_DATA:return Object(c.a)(Object(c.a)({},e),{},{
                        audioData:t.payload.audioData
                    });
                    case u.SHOW_PLAYLIST:return Object(c.a)(Object(c.a)({},e),{},{
                        showPlaylist:t.payload.showPlaylist
                    });
                    default:return Object(c.a)({},e)}}}),
        g=a(25),y=Object(l.d)(m,Object(l.a)(g.a)),f=a(7),h=a(8),v=a(12),_=a(11),S=(a(36),a(26)),E=a(3),T=(a(37),function(){
            function e(){
                Object(f.a)(this,e)
            }
            return Object(h.a)(e,null,[{key:"handleErrors",value:function(e){
                if(!e.ok)throw new Error(e.status);return e
            }}]),e}());
        function b(){
            return function(e){
                return e({type:u.FETCH_PLAYLIST_BEGIN}),fetch("https://leo-t-88.github.io/tune-radio/radio/rtl/rtl.json",{credentials:"omit",method:"GET"})
                .then(T.handleErrors).then((function(e){return e.json();}))
                .then((function(t){var a;e((a=t.songs,{type:u.SET_PLAYLIST_DATA,payload:{playlistData:a}}))}))
                .catch((function(t){e(function(e){return{type:u.FETCH_PLAYLIST_FAILURE,payload:{error:e}}}(t))}))}
        }
        function I(e){
            return function(t){
                t(function(e){
                    return{
                        type:u.SET_SONG_DATA,payload:{
                            song_name:e.song,
                            artist_name:e.author,
                            song_album_art:e.albumart,
                            song_lyrics_link:e.json,
                            song_audio_link:e.audio
                        }
                    }
                }(e))
            }
        }
        var L=function(e){
            return{type:u.SET_LYRICS_DATA,payload:{song_lyrics_data:e}}
        };
        var m=function(e){
            return{song_audio_link}
        };
        var D=function(e){
            return{type:u.SET_CURRENT_SONG_INDEX,payload:{currentSongIndex:e}}
        },
        A=function(e){
            return{type:u.SET_PLAY_STATE,payload:{play:e}}
        },
        O=function(e){
            return{type:u.SHOW_PLAYLIST,payload:{showPlaylist:e}}
        },
        w=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);
            function a(){
                var e;Object(f.a)(this,a);
                for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o)))
                .togglePlaylist=function(){
                    var t=e.props;(0,t.setShowPlaylist)(!t.showPlaylistBool)
                },e}
            return Object(h.a)(a,[{
                key:"render",value:function(){
                    var e=this.props,t=e.song_name,a=e.artist_name,n=e.showPlaylistBool?"hide":"";
                    return o.a.createElement("header",null,o.a.createElement("div",{id:"top-bar",className:"flex vrtlCenter"},o.a.createElement("div",{id:"about-song",className:"".concat(n)},o.a.createElement("h2",{className:"song-name"},t),o.a.createElement("h4",{className:"artist-name low-text-opacity"},a)),o.a.createElement("button",{id:"back",onClick:this.togglePlaylist},o.a.createElement("i",{className:"fa fa-map-marker",onCklick:function playlst(){}})),))
                }
            }
        ]),
    a}
    (n.Component),P=Object(s.b)((function(e){
        return{
            song_name:e.song.song_name,
            artist_name:e.song.artist_name,
            showPlaylistBool:e.playlist.showPlaylist
        }
    }),(function(e){
        return{
            setShowPlaylist:function(t){
                return e(O(t))
            }
        }
    }))(w),N=(a(38),function(e){
        Object(v.a)(a,e);
        var t=Object(_.a)(a);
        function a(e){
            var n;
            Object(f.a)(this,a),(n=t.call(this,e)).handleTouchDrag=function(e){
                var t,a,o,r=n.state.audio.duration,i=n.state.audio;
                    a=document.querySelector("#progress-bar").clientWidth,o=document.querySelector("#progress-bar").getBoundingClientRect().left;
                var s=parseInt(e.touches[0].clientX-o)/parseInt(a)*100;
                    t=parseInt(r*(s/100)),s>100&&(s=100),document.querySelector("#progress").style.width=s+"%",i.paused||i.pause(),i.currentTime=t>=r?r-1:t,n.setState({audio:i,seek:!0})
                },
                n.handleDrag=function(e){
                            var t,a,o,r=n.state.audio.duration,i=n.state.audio;
                            a=document.querySelector("#progress-bar").clientWidth,o=document.querySelector("#progress-bar").getBoundingClientRect().left;
                            var s=parseInt(e.clientX-o)/parseInt(a)*100;t=parseInt(r*(s/100)),s>100&&(s=100),document.querySelector("#progress").style.width=s+"%",i.paused||i.pause(),i.currentTime=t>=r?r-1:t,n.setState({audio:i,seek:!0})
                        },
                        n.togglePlay=function(){
                            var e=document.querySelector("#menu #play");
                            e.children[0].classList.contains("fa-play")?(e.children[0].classList.remove("fa-play"),e.children[0].classList.add("fa-pause"),n.state.audio.play(),n.setState({play:!0})):(e.children[0].classList.remove("fa-pause"),e.children[0].classList.add("fa-play"),n.state.audio.pause(),n.setState({play:!1}))
                            },
                        n.bindKeysHandler=function(e){
                            e.stopPropagation(),e.preventDefault();
                            var t=e.keyCode?e.keyCode:e.which;if(32===t)n.togglePlay();
                            else if(82===t)n.setState({repeat:!n.state.repeat});
                            else if(83===t)n.setState({shuffle:!n.state.shuffle});
                            else if(78===t)n.nextSong();else if(80===t)n.prevSong();
                            else if(27===t)n.togglePlaylist();
                            else if(39===t){var a=n.state.audio,o=(1e3*a.currentTime+5e3)/1e3;o>=a.duration?a.currentTime=(1e3*a.duration-1e3)/1e3:a.currentTime=o,n.setState({audio:a})}
                            else if(37===t){var r=n.state.audio,i=(1e3*r.currentTime-5e3)/1e3;r.currentTime=i<=0?0:i,n.setState({audio:r})}
                        },
                        n.togglePlaylist=function(){var e=n.props;(0,e.setShowPlaylist)(!e.showPlaylistBool)},
                        n.parseTime=function(e){var t=parseInt(e/6e4),a=parseInt(e%6e4/1e3);return a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)},
                        n.setTotalTime=function(){n.setState({totalTime:n.parseTime(parseInt(1e3*n.state.audio.duration))}),n.state.audio.removeEventListener("loadeddata",(function(e){console.log("Total Time is set!"),n.setTotalTime()}))},
                        n.setCurrentTime=function(){var e=n.state.audio;n.setState({currentTime:n.parseTime(parseInt(1e3*e.currentTime)),percent:e.currentTime/e.duration*100})},
                        n.prevSong=function(){var e=n.props,t=e.playlistData,a=e.currentSongIndex,o=e.setCurrentSongIndex,r=e.setSongData;if(void 0!==t&&t.length>0){var i=(a-1+t.length)%t.length;o(i),r(t[i])}},
                        n.getNextNum=function(e,t){for(;e;){var a=parseInt(100*Math.random());if(a%t!==0)return a}return 1},
                        n.nextSong=function(){
                            var e=n.props,t=e.playlistData,a=e.currentSongIndex,o=e.setCurrentSongIndex,r=e.setSongData,i=n.state,s=i.shuffle,l=i.repeat;
                            if(void 0!==t&&t.length>0){
                                var c=(a+n.getNextNum(s,t.length))%t.length;a+1===t.length&&!1===l&&n.setState({play:!1}),o(c),r(t[c])
                            }
                        };
                        var o=new Audio;return e.setAudioData(o),n.state={
                            totalTime:void 0,
                            currentTime:"-:--",
                            audio:o,
                            timer:void 0,
                            percent:0,
                            src:void 0,
                            play:!1,
                            seek:!1,
                            repeat:!1,
                            shuffle:!1
                        },
                    n}
        return Object(h.a)(a,[{ 
            key:"componentDidMount",value:function(){
                var e=this,t=this.state.audio;t.addEventListener("playing",(function(t){
                    console.log("Audio is Playing"),e.setState({timer:setInterval(e.setCurrentTime,1e3)})
                })),
                t.addEventListener("pause",(function(t){
                    console.log("Audio is Paused"),clearInterval(e.state.timer)
                })),
                t.addEventListener("loadeddata",(function(t){
                    console.log("Total Time is set!"),e.setTotalTime()
                })),
                t.addEventListener("ended",(function(t){
                    console.log("Song ended!"),e.nextSong()
                })),
                window.addEventListener("mouseup",(function(a){
                    window.removeEventListener("mousemove",e.handleDrag),e.state.play&&e.state.audio.play(),e.setState({audio:t,seek:!1})
                })),
                window.addEventListener("touchend",(function(a){
                    window.removeEventListener("touchmove",e.handleTouchDrag),e.state.play&&e.state.audio.play(),e.setState({audio:t,seek:!1})
                })),
                window.addEventListener("keyup",this.bindKeysHandler)
            }
        },{
            key:"componentDidUpdate",value:function(e,t){
                if(e.song_audio_link!==this.props.song_audio_link){
                    console.log("Audio is Changed");
                    var a=this.state.audio;
                    a.src=this.props.song_audio_link,this.state.play&&a.play(),this.setState({totalTime:"-:--",currentTime:"0:00",percent:0,src:this.props.song_audio_link})
                }
                this.state.play!==t.play?this.props.setPlayState(this.state.play):this.state.play===t.play&&this.state.play!==this.props.play&&this.togglePlay()
            }
        },{
            key:"render",value:function(){
                var e=this,t=this.state,a=t.totalTime,n=t.currentTime,r=t.percent,i=t.repeat,s=t.shuffle;
                return o.a.createElement("footer",null,o.a.createElement("div",{id:"player"},o.a.createElement("div",{id:"menu"},o.a.createElement("button",{id:"play",onClick:function(t){return e.togglePlay()}},o.a.createElement("i",{className:"fa fa-play"})))))
            }
        }]),
    a}
    (n.Component)),j=Object(s.b)((function(e){
        return{
            song_audio_link:e.song.song_audio_link,
            currentSongIndex:e.playlist.currentSongIndex,
            playlistData:e.playlist.playlistData,
            play:e.song.play,showPlaylistBool:e.playlist.showPlaylist
        }
    }),
    (function(e){
        return{
            setSongData:function(t){
                return e(I(t))},
                setCurrentSongIndex:function(t){return e(D(t))},
                setAudioData:function(t){return e({type:u.SET_AUDIO_DATA,payload:{audioData:t}})},
                setPlayState:function(t){return e(A(t))},
                setShowPlaylist:function(t){return e(O(t))}
        }
    }))(N),k=(a(39),function(e){
        Object(v.a)(a,e);
        var t=Object(_.a)(a);
        function a(e){
            var n;
            Object(f.a)(this,a),(n=t.call(this,e)).setIntervalFunction=function(){
                console.log("Lyrics Synchronization is resumed"),n.setState({
                    timer:setInterval(n.updateLyricsOnTop,1e3)})
                },
            n.clearIntervalFunction=function(){
                console.log("Lyrics Synchronization is paused"),clearInterval(n.state.timer)
            },
            n.updateLyricsOnTop=function(){
                var e=document.querySelectorAll("#lyrics-content > h2"),t=document.querySelectorAll("#lyrics-content > h2.on-top"),a=!0;
                try{
                    e.forEach((function(o,r){
                        if(0===r){
                            var i=parseInt(o.getAttribute("data-time"));
                            if(parseInt(1e3*n.props.audioData.currentTime)<i)throw t.length>0&&t.forEach((function(e){
                                e.classList.remove("on-top")
                            })),
                            new Error("No need to iterate further")
                        }
                        if(o.classList.contains("on-top")&&o.classList.remove("on-top"),r+1<e.length&&!0===a){
                            var s=parseInt(e[r+1].getAttribute("data-time"));
                            if(parseInt(1e3*n.props.audioData.currentTime)<s&&!o.classList.contains("on-top"))return o.classList.add("on-top"),n.centerize(),void(a=!1)
                        }
                        else if(void 0!==o&&r+1===e.length){
                            var l=parseInt(e[r].getAttribute("data-time"));
                            parseInt(1e3*n.props.audioData.currentTime)>=l&&(o.classList.contains("on-top")||o.classList.add("on-top"))
                        }
                    }))
                }
                catch(o){return}
            };
            var o=e.playlistData,r=e.setSongData,i=e.setCurrentSongIndex,s=e.song_name;
            if(void 0!==o&&o.length>0&&void 0===s){i(0),r(o[0])}
            return n.state={timer:void 0},
        n}
        return Object(h.a)(a,[{
            key:"componentDidMount",value:function(){
                var e=this.props.audioData;
                void 0!==e&&void 0!==this.props.song_lyrics_link&&(e.addEventListener("playing",this.setIntervalFunction),e.addEventListener("pause",this.clearIntervalFunction),console.log("Lyrics Updated!"),this.props.getLyricsData(this.props.song_lyrics_link))
            }
        },{
            key:"componentWillUnmount",value:function(){
                var e=this.props.audioData;void 0!==e&&(e.removeEventListener("playing",this.setIntervalFunction),e.removeEventListener("pause",this.clearIntervalFunction))
            }
        },{
            key:"centerize",value:function(){
                if(0!==document.querySelectorAll(".on-top").length){
                    var e=document.querySelector(".on-top"),t=e.getBoundingClientRect().height,a=document.querySelector("#lyrics").getBoundingClientRect().height,n=1/3;a<200&&(n=.02);
                    var o=e.getBoundingClientRect().top-e.parentNode.getBoundingClientRect().top+t/2-a*n;
                    o<0&&(o=0),document.querySelector("#lyrics").scrollTo(0,o)
                }
            }
        },{
            key:"render",value:function(){
                var e=this.props,t=e.song_name,a=e.artist_name,n=e.song_lyrics_data,r=[];return void 0!==n&&n.length>0&&(r=[],n.forEach((function(e,t){r.push(o.a.createElement("h2",{key:t,"data-time":e.time},e.line))}))),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,o.a.createElement("div",{id:"lyrics"},o.a.createElement("div",{id:"lyrics-content"},r))))
            }
        }]),
    a}
    (n.Component)),
        C=Object(s.b)((function(e){
            return{
                playlistData:e.playlist.playlistData,
                song_name:e.song.song_name,
                artist_name:e.song.artist_name,
                song_lyrics_link:e.song.song_lyrics_link,
                song_lyrics_data:e.song.song_lyrics_data,
                audioData:e.playlist.audioData
            }
        }),(function(e){
            return{
                setSongData:function(t){
                    return e(I(t))
                },
                getLyricsData:function(t){
                    return e(function(e){
                        return function(t){
                            return t(L([{line:"Loading",time:0}])),fetch(e,{credentials:"omit",method:"GET"}).then(T.handleErrors).then((function(e){return e.json()})).then((function(e){t(L(e.lyrics))})).catch((function(e){t(L([{line:""}]))}))
                        }
                    }(t))
                },
                setCurrentSongIndex:function(t){
                    return e(D(t))}
            }
        }))(k),x=(a(40),function(e){
            Object(v.a)(a,e);
            var t=Object(_.a)(a);
            function a(){
                var e;
                Object(f.a)(this,a);
                for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];
                return(e=t.call.apply(t,[this].concat(o))).searchSongs=function(e){
                    var t=e.currentTarget.value.toLowerCase().trim();
                    document.querySelectorAll(".song-list-row").forEach((function(e){
                        e.textContent.toLowerCase().includes(t)?e.style.display="flex":e.style.display="none"
                    }))
                },
            e}
            return Object(h.a)(a,[{
                key:"playThisSong",
                value:function(e){
                    var t=this.props,
                    a=t.setCurrentSongIndex,
                    n=t.setSongData,
                    o=t.currentSongIndex,
                    r=t.setPlayState,
                    i=t.play,
                    s=t.playlistData;
                    e!==o&&!1===i?r(!0):o===e&&r(!i),a(e),n(s[e])
                }
            },{
                key:"render",
                value:function(){
                    var e,t=this,
                    a=this.props,
                    n=a.playlistData,
                    r=a.song_name,
                    i=a.play;
                    e=a.showPlaylist?"show":"";
                    var s=[];return void 0!==n&&n.length>0&&(s=[],n.forEach((function(e,a){s.push(o.a.createElement("div",{key:a,"data-index":a,className:"flex vrtlCenter hrtlCenter song-list-row"},o.a.createElement("div",{className:"album-art"},o.a.createElement("img",{alt:e.song,src:e.albumart})),o.a.createElement("div",{className:"song-details"},o.a.createElement("h2",{className:"song"},e.song),o.a.createElement("h4",{className:"artist"},e.author)),o.a.createElement("div",{className:"options",onClick:function(e){return t.playThisSong(a)}},r===e.song&&i&&o.a.createElement("i",{className:"fa fa-pause"}),(r!==e.song||!i)&&o.a.createElement("i",{className:"fa fa-play"}))))}))),
                        o.a.createElement("div",{id:"playlist",className:"".concat(e)},o.a.createElement("div",{id:"label"},o.a.createElement("h1",null,"Playlist"),o.a.createElement("input",{id:"search",type:"text",placeholder:"\uf002 Rechercher un titre",autoComplete:"off",onKeyUp:function(e){e.stopPropagation(),t.searchSongs(e)}})),o.a.createElement("div",{id:"show-box"},o.a.createElement("div",{id:"show-list"},s.length>0&&o.a.createElement("div",{className:"song-list"},s))))
                    }
                }
            ]),
        a}(n.Component)),R=Object(s.b)((function(e){
            return{
                playlistData:e.playlist.playlistData,
                song_name:e.song.song_name,
                currentSongIndex:e.playlist.currentSongIndex,
                play:e.song.play,
                showPlaylist:e.playlist.showPlaylist
            }
        }),(function(e){
            return{
                setSongData:function(t){return e(I(t))},
                setCurrentSongIndex:function(t){return e(D(t))},
                setPlayState:function(t){
                    return e(A(t))
                }
            }
        }))(x),Y=function(e){
            Object(v.a)(a,e);
            var t=Object(_.a)(a);
            function a(e){
                var n;Object(f.a)(this,a),n=t.call(this,e);
                var o=e.playlistData,r=e.loading,i=e.getPlaylist;
                return void 0===o&&!1===r&&i(),
            n}
            return Object(h.a)(a,[{
                key:"render",value:function(){
                    var e=this.props.song_album_art;
                    return o.a.createElement(S.a,null,o.a.createElement("img",{className:"album-art-background",alt:"album-art-background",src:e}),o.a.createElement(P,null),o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:function(){return o.a.createElement(C,null)}})),o.a.createElement(R,null),o.a.createElement(j,null))
                }
            }]),
        a}
        (n.Component),U=Object(s.b)((function(e){
            return{
                playlistData:e.playlist.playlistData,
                loading:e.playlist.loading,
                song_album_art:e.song.song_album_art
            }
        }),(function(e){
            return{
                getPlaylist:function(){
                    return e(b())
                }
            }
        }))(Y);
        a(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,{store:y},o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))
    }
},[[27,1,2]]]);
