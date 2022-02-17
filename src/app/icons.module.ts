import { CommonModule } from "@angular/common";
import { Inject, NgModule } from "@angular/core";
import { iconsPathFactory, TuiSvgService, TUI_ICONS_PATH, TUI_SANITIZER } from "@taiga-ui/core";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { cuIconAvo } from "./icons.model";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory("assets/taiga-ui/icons/")
    }
  ]
})
export class IconsModule {
  constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
    svgService.define({
      avocado: cuIconAvo.data
    });
  }
}
