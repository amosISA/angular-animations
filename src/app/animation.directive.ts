import { AnimationBuilder, AnimationMetadata, animate, style } from "@angular/animations";
import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[appAnimation]',
    standalone: true
})
export class AnimationDirective {
    builder = inject(AnimationBuilder);
    el = inject(ElementRef);

    @HostListener('mousedown') mouseDown() {
        this.playAnimation(this.fadeOutAnimation());
    }

    @HostListener('mouseup') mouseUp() {
        this.playAnimation(this.fadeInAnimation());
    }

    private playAnimation(animationMetadata: AnimationMetadata[]): void {
        const animation = this.builder.build(animationMetadata);
        const player = animation.create(this.el.nativeElement);
        player.play();
    }

    private fadeInAnimation(): AnimationMetadata[] {
        return [animate('400ms ease-in', style({ opacity: 1 }))];
    }

    private fadeOutAnimation(): AnimationMetadata[] {
        return [animate('400ms ease-in', style({ opacity: 0.5 }))];
    }
}