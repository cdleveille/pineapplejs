declare module "deck-of-cards" {
	export default function Deck(jokers?: boolean): Deck;

	export type Deck = {
		$el: HTMLElement;
		bysuit: () => void;
		cards: Card[];
		fan: () => void;
		flip: () => void;
		intro: () => void;
		mount: (root: HTMLElement) => void;
		off: (name: string, cb: (...args: any[]) => void) => void;
		on: (name: string, cb: (...args: any[]) => void, ctx: any) => void;
		one: (name: string, cb: (...args: any[]) => void, ctx: any) => void;
		poker: () => void;
		queue: (action: { apply: (...args: any[]) => void }) => void;
		queued: (action: { apply: (...args: any[]) => void }) => void;
		shuffle: () => void;
		sort: () => void;
		trigger: (name: string) => void;
		unmount: () => void;
	};

	export type Card = {
		$el: HTMLElement;
		$root: HTMLElement;
		animateTo: (params: any) => void;
		bysuit: (cb: () => void) => void;
		disableDragging: () => void;
		disableFlipping: () => void;
		enableDragging: () => void;
		enableFlipping: () => void;
		fan: (i: number, len: number, cb: (...args: any[]) => void) => void;
		i: number;
		intro: (i: number, len: number, cb: (...args: any[]) => void) => void;
		mount: (target: HTMLElement) => void;
		poker: (i: number, len: number, cb: (...args: any[]) => void) => void;
		pos: number;
		rank: number;
		rot: number;
		setRankSuit: (rank: number, suit: number) => void;
		setSide: (newSide: CardSide) => void;
		shuffle: (cb: (...args: any[]) => void) => void;
		side: CardSide;
		sort: (i: number, len: number, cb: (...args: any[]) => void, reverse: boolean) => void;
		suit: number;
		unmount: () => void;
		x: number;
		y: number;
		z: number;
	};

	export type CardSide = "front" | "back";
}
