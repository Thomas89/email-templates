var DATA_ORIGINAL = {
    "recipient_first_name": "John",
    "recipient_display_name": "John Black",
    "sender_display_name": "Michael Wishnick",
    "url": "http://url",
    "collection_name": "Pop Art Collection",
    /*invitation_viewing_room*/
        "collectables": [
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_1@2x.png',
                "artist_name": 'Roy Lichtenstein',
                "title": 'Imperfect 67” x 79 7/8” from Imperfect series”',
                "description": "simple",
                "year": '1988',
                "medium": 'Woodcut, screenprint, paper',
                "size": '67 x 79.875 "',
                "date": "simple",
                "value": "simple",
                "provenance": "simple",
                "exhibited": "simple",
                "literature": "simple"
            },
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_6@2x.png',
                "artist_name": 'Pablo Picasso',
                "title": 'Portrait of a Bearded Man Wearing a Hat',
                "medium": 'aquatint on wove paper',
                "size": '11.8 x 8.9 cm'
            },
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_5@2x.png',
                "artist_name": 'Joan Miró',
                "title": 'Ma de Proverbis',
                "year": '1970',
                "medium": 'lithograph in colors on watermarked Arches paper',
                "size": '56.5 x 76 cm'
            }
        ],
        "collectables_count": 14,
        "collectables_displayed_count": 3,
    "file_name": "transportation-quote-answer.pdf",
    "file_url": "http://file_url",
    "comment_message": "Thank you! Please call my manager to arrange the transportation 1-555-12345",
    "record_created_date": "09/25/2015 5:40PM"
};

var img_min = "https://placeholdit.imgix.net/~text?txtsize=14&txt=90%C3%9760&w=90&h=60";
var img_max = "https://placeholdit.imgix.net/~text?txtsize=54&txt=400%C3%97275&w=400&h=275";

var long_text = "Lorem Ipsum is simply dummy text of the printing";
var very_long_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";


var DATA_TEST_MIN = {
    "recipient_first_name": "John",
    "recipient_display_name": "John Black",
    "sender_display_name": "Michael Wishnick",
    "url": "http://url",
    "collection_name": "Pop Art Collection",
    /*invitation_viewing_room*/
    "collectables": [
        {
            "img": img_min,
            "artist_name": 'Roy Lichtenstein',
            "title": 'Imperfect 67” x 79 7/8” from Imperfect series”',
            "description": "simple",
            "year": '1988',
            "medium": 'Woodcut, screenprint, paper',
            "size": '67 x 79.875 "'
        },
        {
            "img": img_min,
            "artist_name": 'Pablo Picasso'
        },
        {
            "img": img_min,
            "title": 'Ma de Proverbis',
            "year": '1970',
            "medium": 'lithograph in colors on watermarked Arches paper',
            "size": '56.5 x 76 cm'
        }
    ],
    "collectables_count": 3,
    "collectables_displayed_count": 3,
    "file_url": "http://file_url",
    "comment_message": "Mesage",
    "record_created_date": "09/25/2015 5:40PM"
};

var DATA_TEST_MAX = {
    "recipient_first_name": "John",
    "recipient_display_name": "John Black",
    "sender_display_name": "Эллен Джорджиане Сер-Леккен",
    "url": "http://url",
    "collection_name": "Pop Art Collection",
    /*invitation_viewing_room*/
    "collectables": [
        {
            "img": img_max,
            "artist_name": 'Roy Lichtenstein',
            "title": long_text,
            "description": "simple",
            "year": '1988',
            "medium": very_long_text,
            "size": '67 x 79.875 "',
            "date": "simple",
            "value": "simple",
            "provenance": long_text,
            "exhibited": long_text,
            "literature": long_text
        },
        {
            "img": img_max,
            "artist_name": 'Pablo Picasso',
            "title": long_text,
            "medium": very_long_text,
            "size": '11.8 x 8.9 cm'
        },
        {
            "img": img_max,
            "artist_name": long_text,
            "title": long_text,
            "year": '1970',
            "medium": very_long_text,
            "size": '56.5 x 76 cm'
        }
    ],
    "collectables_count": 14,
    "collectables_displayed_count": 3,
    "file_name": long_text,
    "file_url": "http://file_url",
    "comment_message": very_long_text,
    "record_created_date": "09/25/2015 5:40PM"
    /*"the_one_who_invited_display_name": "Эллен Джорджиане Сер-Леккен",*/
};


var DATA = DATA_ORIGINAL;
module.exports.DATA = DATA;