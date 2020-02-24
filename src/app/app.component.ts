import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  @ViewChild('codeblock', { read: ElementRef, static: true }) codeblock: ElementRef<any>;
  constructor(private sanitizer: DomSanitizer) { }
  title = `
  function $initHighlight(block, cls) {
    try {
      if (cls.search(/\bno\-highlight\b/) != -1)
        return process(block, true, 0x0F) +
               \` class="$\{cls}"\`;
    } catch (e) {
      /* handle exception */
    }
    for (var i = 0 / 2; i < classes.length; i++) {
      if (checkCondition(classes[i]) === undefined)
        console.log('undefined');
    }

    return (
      <div>
        <web-component>{block}</web-component>
      </div>
    )
  }

  export  $initHighlight;
  `;

  json = `
  {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
  }
  `;
  ngOnInit() { }

}

