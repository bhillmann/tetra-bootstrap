$(document).ready(function() {
     $('#tipue_search_input').tipuesearch({
         'show': 10,
         'mode': 'json',
         'contentLocation': '{{ SITEURL }}/tipuesearch_content.json'
     });
});