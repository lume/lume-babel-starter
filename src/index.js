import {Element, reactive, attribute, css} from '@lume/element'
import {useDefaultNames} from 'lume'

class NameCard extends Element {
	@reactive @attribute name = "John Doe"

	template = () => (
		<div>
			<b>
				Hello, my name is: <br />
				<h2>${() => this.name}</h2>

				{/*Example: End user's child content is rendered here.*/}
				<slot></slot>
			</b>
		</div>
    );

	css = css`
		:host {
			padding: 10px;
			display: inline-block;
			border: 5px solid #7eb6e6;
			border-radius: 10px;
			color: rgba(0, 0, 0, 0.3);
			background: #c1d5e6;
		}

		h2 {
			color: rgba(0, 0, 0, 0.5);
		}
	`;

	connectedCallback() {
		super.connectedCallback();

		// Example: Element changes its own state.
		setTimeout(() => this.name = "Rengis Marsk", 2000);
	}
}

customElements.define("name-card", NameCard);

// Example: End user changes the element state in JS.
setTimeout(() => card.name = "Minksa Poroni", 4000);
setTimeout(() => card.removeAttribute("name"), 6000); // will render the default "John Doe"
setTimeout(() => card.setAttribute("name", "Relim Norkis"), 8000);

// Example: User defines a rotation function for the container:
container.rotation = (x, y, z, time) => [x, 30 * Math.sin(time * 0.001), z];
