    $(function () {
        /**
        * build the carousel for the Albums
        */
        $('#mp_albums').jcarousel({
            scroll: 3
        }).children('li')
          .bind('click', function () {
              //when clicking on an album, display its info, and hide the current one
              var $this = $(this);
              $('#musicPlayerPanel').find('.mp_content:visible')
                                    .hide();

              $('#musicPlayerPanel')
                                        .find('.mp_content:nth-child(' + parseInt($this.index() + 1) + ')')
                                        .fadeIn(1000);

          });

        /****  The Player  ****/
        // Local copy of jQuery selectors, for performance.
        //var jpPlayTime = $("#jplayer_play_time");
        //var jpTotalTime = $("#jplayer_total_time");
        //var $list = $("#jplayer_playlist ul");

        /**
        * Innitialize the Player 
        * (see jPlayer documentation for other options)
        */
		        
		        
        //$("#jquery_jplayer").jPlayer({
        //    oggSupport: false,
        //    preload: "auto",
        //    errorAlerts: true,
        //    nativeSupport: true
        //})
        //.jPlayer("onProgressChange",
        //    function (loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
        //        jpPlayTime.text($.jPlayer.convertTime(playedTime));
        //        jpTotalTime.text($.jPlayer.convertTime(totalTime));
        //    })
        //.jPlayer("onSoundComplete", function () {
        //    playListNext();
        //});

        /**
        * click previous button, plays previous song
        */
        //$("#jplayer_previous").bind('click', function () {
        //    playListPrev();
        //    $(this).blur();
        //    return false;
        //});

        /**
        * click next button, plays next song
        */
        //$("#jplayer_next").bind('click', function () {
        //    playListNext();
        //    $(this).blur();
        //    return false;
        //});

        /**
        * plays song in position i of the list of songs (playlist)
        */
        //function playSong(i) {
        //    var $next_song = $list.find('li:nth-child(' + i + ')');
        //    var mp3 = $next_song.find('.mp_mp3').html();
        //    var ogg = $next_song.find('.mp_ogg').html();
        //    //alert(mp3);
        //    $list.find('.jplayer_playlist_current').removeClass("jplayer_playlist_current");
        //    $next_song.find('a').addClass("jplayer_playlist_current");
        //    $("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
        //}

        /**
        * plays the next song in the playlist
        */
        //function playListNext() {
        //    var $list_nmb_elems = $list.children().length;
        //    var $curr = $list.find('.jplayer_playlist_current');
        //    var idx = $curr.parent().index();
        //    var index = (idx < $list_nmb_elems - 1) ? idx + 1 : 0;
        //    playSong(index + 1);
        //}

        /**
        * plays the previous song in the playlist
        */
        //function playListPrev() {
        //    var $list_nmb_elems = $list.children().length;
        //    var $curr = $list.find('.jplayer_playlist_current');
        //    var idx = $curr.parent().index();
        //    var index = (idx - 1 >= 0) ? idx - 1 : $list_nmb_elems - 1;
        //    playSong(index + 1);
        //}

        /**
        * User clicks the play icon on one of the songs listed for an Album.
        * Adds it to the Playlist, and plays it
        */
        function addFirst(song_idx, name, mp3, ogg) {
            $list.empty();
            /**
            * each song element in the playlist has:
            * - span for the close / remove action
            * - the mp3 path
            * - the ogg path
            */
            var song_html = "<a href='#' class='jplayer_playlist_current' tabindex='1' title=\"" + name + "\">" + name + "</a>";
            song_html += "<span></span>";
            song_html += "<div class='mp_mp3' style='display:none;'>" + mp3 + "</div>";
            song_html += "<div class='mp_ogg' style='display:none;'>" + ogg + "</div>";
            var $listItem = $("<li/>", {
                id: song_idx,
                className: 'jplayer_playlist_current',
                html: song_html
            });
            $list.append($listItem);
            //event to play the song when User clicks on it
            $listItem.find('a').bind('click', clickSong);
            //event to remove the song from the playlist when User clicks the remove button
            $listItem.find('span').bind('click', removeSong);
            //start playing it
            $("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
            jpTotalTime.show();
            jpPlayTime.show();
        }

        /**
        * adds a song to the playlist, if not there already.
        * if it is the only one, start playing it
        */
        function addToPlayList(song_idx, name, mp3, ogg) {
            var $list_nmb_elems = $list.children().length;
            //if already in the list return
            if ($list.find('#' + song_idx).length)
                return;
            //class for the current song being played
            var c = '';
            if ($list_nmb_elems == 0)
                c = 'jplayer_playlist_current';
            var song_html = "<a href='#' class=" + c + " tabindex='1' title=\"" + name + "\">" + name + "</a>";
            song_html += "<span></span>";
            song_html += "<div class='mp_mp3' style='display:none;'>" + mp3 + "</div>";
            song_html += "<div class='mp_ogg' style='display:none;'>" + ogg + "</div>";
            var $listItem = $("<li/>", {
                id: song_idx,
                html: song_html
            });
            $list.append($listItem);
            //if its the only song play it
            if ($list_nmb_elems == 0) {
                $("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
                jpTotalTime.show();
                jpPlayTime.show();
            }
            $listItem.find('a').bind('click', clickSong);
            $listItem.find('span').bind('click', removeSong);
        }

        /**
        * removes a song from the playlist.
        * if the song was the current one, and there are more songs 
        * in the playlist, then plays the next one.
        * if there are no more, stops the player, and removes the status bar
        * otherwise keeps playing whatever song was being played
        */
        function removeSong() {
            var $this = $(this);
            var current = $this.parent().find('a.jplayer_playlist_current').length;
            $this.parent().remove();
            var $list_nmb_elems = $list.children().length;
            if ($list_nmb_elems > 0 && current)
                playListNext();
            else if ($list_nmb_elems == 0) {
                $("#jquery_jplayer").jPlayer("clearFile");
                jpTotalTime.hide();
                jpPlayTime.hide();
            }
            return false;
        }

        /**
        * User clicks on a song in the playlist. Plays it
        */
        function clickSong() {
            var index = $(this).parent().index();
            playSong(index + 1);
            return false;
        }

        /**
        * The next are the events for clicking on both "play" and "add to playlist" icons
        */
        $('#musicPlayerPanel').find('.mp_play').bind('click', function () {
            var $this = $(this);
            var $paths = $this.parent().siblings('.mp_song_info');
            var title = $paths.find('.mp_song_title').html();
            var mp3 = $paths.find('.mp_mp3').html();
            var ogg = $paths.find('.mp_ogg').html();
            var album_id = $this.closest('.mp_content').attr('id');
            var song_index = $this.parent().parent().index();
            var song_idx = album_id + '_' + song_index;
            //add to playlist and play the song
            addFirst(song_idx, title, mp3, ogg);
        });
        $('#musicPlayerPanel').find('.mp_addpl').bind('click', function () {
            var $this = $(this);
            var $paths = $this.parent().siblings('.mp_song_info');
            var title = $paths.find('.mp_song_title').html();
            var mp3 = $paths.find('.mp_mp3').html();
            var ogg = $paths.find('.mp_ogg').html();
            var album_id = $this.closest('.mp_content').attr('id');
            var song_index = $this.parent().parent().index();
            var song_idx = album_id + '_' + song_index;
            //add to playlist and play the song if none is there
            addToPlayList(song_idx, title, mp3, ogg);
        });

        /**
        * we want to show on the album image, the play button for playing the whole album
        */
        $('#musicPlayerPanel').find('.mp_content_image').bind('mouseenter', function () {
            var $this = $(this);
            $this.find('.mp_playall').show();
        }).bind('mouseleave', function () {
            var $this = $(this);
            $this.find('.mp_playall').hide();
        });

        /**
        * to play the whole album, we play the first song and add all the others to the playlist.
        * playing the first one, guarantees us that the playlist is set to empty before
        */
        $('#musicPlayerPanel').find('.mp_playall').bind('click', function () {
            var $this = $(this);
            var $album = $this.parent();
            $album.find('.mp_play:first').trigger('click');
            $album.find('.mp_addpl').trigger('click');
        })

        /**
        * playlist songs can be reordered
        */
        $list.sortable();
        $list.disableSelection();

    });
