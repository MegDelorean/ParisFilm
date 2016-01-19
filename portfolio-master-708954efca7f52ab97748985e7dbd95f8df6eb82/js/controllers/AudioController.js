app.controller('AudioController', ['$scope', '$sce', function($scope, $sce) {
    $scope.sounds = [
        {
            /* Moderne */
            title: "Moderne",
            musics: [
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206538595%3Fsecret_token%3Ds-i7XWi&amp;color=df4b3d&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'red',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-red"></i>' + 
                        '<small class="icon">FLStudio</small>' + 
                        '<i class="icon-ProTools color-red"></i><small class="icon">Pro Tools</small>'),
                    instruments: $sce.trustAsHtml('Instruments : <i class="icon-EG color-red"></i><small class="icon">&nbsp;Electric Guitar</small>')
                }
            ] 
        },
        {
            /* Blues & Country */
            title: "Blues & Country",
            musics: [
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206617533%3Fsecret_token%3Ds-ANCBU&amp;color=03A9F4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'blue',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>'),
                    instruments: $sce.trustAsHtml('Instruments : <i class="icon-Cajon color-{{music.color}}"></i><small class="icon">&nbsp;Cajòn</small>' + 
                        '<i class="icon-EG color-{{music.color}}"></i><small class="icon">&nbsp;Electric Guitar (Solo)</small>' + 
                        '<i class="icon-CG color-{{music.color}}"></i><small class="icon">&nbsp;Acoustic Guitar</small>')
                },
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206616999%3Fsecret_token%3Ds-Wogns&amp;color=03A9F4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'blue',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>')
                },
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206618055%3Fsecret_token%3Ds-uCkFg&amp;color=03A9F4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'blue',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>'),
                    instruments: $sce.trustAsHtml('Instruments : <i class="icon-CG color-{{music.color}}"></i><small class="icon">&nbsp;Acoustic Guitar</small>')
                },
            ] 
        },
        {
            /* Classic Style */
            title: "Classic Style",
            musics: [
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206618388%3Fsecret_token%3Ds-zmov1&amp;color=8BC34A&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'green',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>')
                }
            ] 
        },
        {
            /* Experimental */
            title: "Experimental",
            musics: [
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206539413%3Fsecret_token%3Ds-7vD5B&amp;color=FFEB3B&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'yellow',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>')
                },
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206539361%3Fsecret_token%3Ds-XuUba&amp;color=FFEB3B&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'yellow',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>')
                },
                {
                    ref: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206619032%3Fsecret_token%3Ds-A88aL&amp;color=FFEB3B&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
                    color: 'yellow',
                    tools: $sce.trustAsHtml('Logiciels : <i class="icon-Fruity color-{{music.color}}"></i>' + 
                        '<small class="icon">FLStudio</small>')
                },
            ] 
        }
    ];
}]);
