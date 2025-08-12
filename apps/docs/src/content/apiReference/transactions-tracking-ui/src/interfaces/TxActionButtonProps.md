[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# TxActionButtonProps\<TR, T\>

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:15](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L15)

## Extends

- `Omit`\<`ButtonHTMLAttributes`\<`HTMLButtonElement`\>, `"onClick"`\>.`Pick`\<`IInitializeTxTrackingStore`\<`TR`, `T`\>, `"transactionsPool"`\>

## Type Parameters

### TR

`TR`

### T

`T` *extends* `Transaction`\<`TR`\>

## Properties

### about?

> `optional` **about**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2726

#### Inherited from

`Omit.about`

***

### accessKey?

> `optional` **accessKey**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2699

#### Inherited from

`Omit.accessKey`

***

### action()

> **action**: () => `Promise`\<`void`\>

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:21](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L21)

The async function to execute on click, which should initiate the transaction.

#### Returns

`Promise`\<`void`\>

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2397

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2399

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"inline"` \| `"none"` \| `"list"` \| `"both"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2404

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2410

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2415

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`Omit.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2416

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2421

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2426

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2431

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2436

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`Omit.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2441

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2446

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"date"` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2448

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2453

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-description?

> `optional` **aria-description**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2458

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`Omit.aria-description`

***

### aria-details?

> `optional` **aria-details**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2463

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2468

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"copy"` \| `"none"` \| `"execute"` \| `"move"` \| `"popup"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2473

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2478

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2480

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2485

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2490

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"true"` \| `"false"` \| `"dialog"` \| `"menu"` \| `"grid"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2492

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2497

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2502

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2504

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2509

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2514

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2516

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2518

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2520

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2522

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2524

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2526

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2532

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2537

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2542

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2547

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2552

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `"all"` \| `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2557

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2570

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2572

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2577

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2582

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2587

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`Omit.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2592

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2597

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2602

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2604

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2606

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2608

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2613

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2615

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string` & `object` \| `"off"` \| `"none"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2700

#### Inherited from

`Omit.autoCapitalize`

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2739

#### Inherited from

`Omit.autoCorrect`

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2701

#### Inherited from

`Omit.autoFocus`

***

### autoSave?

> `optional` **autoSave**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2740

#### Inherited from

`Omit.autoSave`

***

### children

> **children**: `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:19](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L19)

The default content of the button when in the 'idle' state.

#### Overrides

`Omit.children`

***

### className?

> `optional` **className**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2702

#### Inherited from

`Omit.className`

***

### color?

> `optional` **color**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2741

#### Inherited from

`Omit.color`

***

### content?

> `optional` **content**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2727

#### Inherited from

`Omit.content`

***

### contentEditable?

> `optional` **contentEditable**: `"inherit"` \| `Booleanish` \| `"plaintext-only"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2703

#### Inherited from

`Omit.contentEditable`

***

### contextMenu?

> `optional` **contextMenu**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2704

#### Inherited from

`Omit.contextMenu`

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2174

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`Omit.dangerouslySetInnerHTML`

***

### datatype?

> `optional` **datatype**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2728

#### Inherited from

`Omit.datatype`

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2693

#### Inherited from

`Omit.defaultChecked`

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2694

#### Inherited from

`Omit.defaultValue`

***

### dir?

> `optional` **dir**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2705

#### Inherited from

`Omit.dir`

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2959

#### Inherited from

`Omit.disabled`

***

### draggable?

> `optional` **draggable**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2706

#### Inherited from

`Omit.draggable`

***

### enterKeyHint?

> `optional` **enterKeyHint**: `"search"` \| `"done"` \| `"enter"` \| `"go"` \| `"next"` \| `"previous"` \| `"send"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2707

#### Inherited from

`Omit.enterKeyHint`

***

### exportparts?

> `optional` **exportparts**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2774

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/exportparts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)

#### Inherited from

`Omit.exportparts`

***

### failedContent?

> `optional` **failedContent**: `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:29](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L29)

Optional custom content to display in the 'failed' state.

***

### form?

> `optional` **form**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2960

#### Inherited from

`Omit.form`

***

### formAction?

> `optional` **formAction**: `string` \| (`formData`) => `void` \| `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2961

#### Inherited from

`Omit.formAction`

***

### formEncType?

> `optional` **formEncType**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2968

#### Inherited from

`Omit.formEncType`

***

### formMethod?

> `optional` **formMethod**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2969

#### Inherited from

`Omit.formMethod`

***

### formNoValidate?

> `optional` **formNoValidate**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2970

#### Inherited from

`Omit.formNoValidate`

***

### formTarget?

> `optional` **formTarget**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2971

#### Inherited from

`Omit.formTarget`

***

### getLastTxKey()

> **getLastTxKey**: () => `undefined` \| `string`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:23](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L23)

A function that returns the key of the most recently initiated transaction.

#### Returns

`undefined` \| `string`

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2708

#### Inherited from

`Omit.hidden`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2709

#### Inherited from

`Omit.id`

***

### inert?

> `optional` **inert**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2760

#### See

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

#### Inherited from

`Omit.inert`

***

### inlist?

> `optional` **inlist**: `any`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2729

#### Inherited from

`Omit.inlist`

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"url"` \| `"text"` \| `"none"` \| `"tel"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2765

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`Omit.inputMode`

***

### is?

> `optional` **is**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2770

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`Omit.is`

***

### itemID?

> `optional` **itemID**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2745

#### Inherited from

`Omit.itemID`

***

### itemProp?

> `optional` **itemProp**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2742

#### Inherited from

`Omit.itemProp`

***

### itemRef?

> `optional` **itemRef**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2746

#### Inherited from

`Omit.itemRef`

***

### itemScope?

> `optional` **itemScope**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2743

#### Inherited from

`Omit.itemScope`

***

### itemType?

> `optional` **itemType**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2744

#### Inherited from

`Omit.itemType`

***

### lang?

> `optional` **lang**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2710

#### Inherited from

`Omit.lang`

***

### loadingContent?

> `optional` **loadingContent**: `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:25](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L25)

Optional custom content to display in the 'loading' state.

***

### name?

> `optional` **name**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2972

#### Inherited from

`Omit.name`

***

### nonce?

> `optional` **nonce**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2711

#### Inherited from

`Omit.nonce`

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2233

#### Inherited from

`Omit.onAbort`

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2234

#### Inherited from

`Omit.onAbortCapture`

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2363

#### Inherited from

`Omit.onAnimationEnd`

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2364

#### Inherited from

`Omit.onAnimationEndCapture`

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2365

#### Inherited from

`Omit.onAnimationIteration`

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2366

#### Inherited from

`Omit.onAnimationIterationCapture`

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2361

#### Inherited from

`Omit.onAnimationStart`

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2362

#### Inherited from

`Omit.onAnimationStartCapture`

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2279

#### Inherited from

`Omit.onAuxClick`

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2280

#### Inherited from

`Omit.onAuxClickCapture`

***

### onBeforeInput?

> `optional` **onBeforeInput**: `InputEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2205

#### Inherited from

`Omit.onBeforeInput`

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2206

#### Inherited from

`Omit.onBeforeInputCapture`

***

### onBeforeToggle?

> `optional` **onBeforeToggle**: `ToggleEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2370

#### Inherited from

`Omit.onBeforeToggle`

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2199

#### Inherited from

`Omit.onBlur`

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2200

#### Inherited from

`Omit.onBlurCapture`

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2235

#### Inherited from

`Omit.onCanPlay`

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2236

#### Inherited from

`Omit.onCanPlayCapture`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2237

#### Inherited from

`Omit.onCanPlayThrough`

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2238

#### Inherited from

`Omit.onCanPlayThroughCapture`

***

### onChange?

> `optional` **onChange**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2203

#### Inherited from

`Omit.onChange`

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2204

#### Inherited from

`Omit.onChangeCapture`

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2282

#### Inherited from

`Omit.onClickCapture`

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2189

#### Inherited from

`Omit.onCompositionEnd`

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2190

#### Inherited from

`Omit.onCompositionEndCapture`

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2191

#### Inherited from

`Omit.onCompositionStart`

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2192

#### Inherited from

`Omit.onCompositionStartCapture`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2193

#### Inherited from

`Omit.onCompositionUpdate`

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2194

#### Inherited from

`Omit.onCompositionUpdateCapture`

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2283

#### Inherited from

`Omit.onContextMenu`

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2284

#### Inherited from

`Omit.onContextMenuCapture`

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2181

#### Inherited from

`Omit.onCopy`

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2182

#### Inherited from

`Omit.onCopyCapture`

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2183

#### Inherited from

`Omit.onCut`

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2184

#### Inherited from

`Omit.onCutCapture`

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2285

#### Inherited from

`Omit.onDoubleClick`

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2286

#### Inherited from

`Omit.onDoubleClickCapture`

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2287

#### Inherited from

`Omit.onDrag`

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2288

#### Inherited from

`Omit.onDragCapture`

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2289

#### Inherited from

`Omit.onDragEnd`

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2290

#### Inherited from

`Omit.onDragEndCapture`

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2291

#### Inherited from

`Omit.onDragEnter`

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2292

#### Inherited from

`Omit.onDragEnterCapture`

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2293

#### Inherited from

`Omit.onDragExit`

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2294

#### Inherited from

`Omit.onDragExitCapture`

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2295

#### Inherited from

`Omit.onDragLeave`

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2296

#### Inherited from

`Omit.onDragLeaveCapture`

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2297

#### Inherited from

`Omit.onDragOver`

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2298

#### Inherited from

`Omit.onDragOverCapture`

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2299

#### Inherited from

`Omit.onDragStart`

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2300

#### Inherited from

`Omit.onDragStartCapture`

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2301

#### Inherited from

`Omit.onDrop`

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2302

#### Inherited from

`Omit.onDropCapture`

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2239

#### Inherited from

`Omit.onDurationChange`

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2240

#### Inherited from

`Omit.onDurationChangeCapture`

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2241

#### Inherited from

`Omit.onEmptied`

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2242

#### Inherited from

`Omit.onEmptiedCapture`

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2243

#### Inherited from

`Omit.onEncrypted`

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2244

#### Inherited from

`Omit.onEncryptedCapture`

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2245

#### Inherited from

`Omit.onEnded`

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2246

#### Inherited from

`Omit.onEndedCapture`

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2219

#### Inherited from

`Omit.onError`

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2220

#### Inherited from

`Omit.onErrorCapture`

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2197

#### Inherited from

`Omit.onFocus`

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2198

#### Inherited from

`Omit.onFocusCapture`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2345

#### Inherited from

`Omit.onGotPointerCapture`

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2346

#### Inherited from

`Omit.onGotPointerCaptureCapture`

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2207

#### Inherited from

`Omit.onInput`

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2208

#### Inherited from

`Omit.onInputCapture`

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2213

#### Inherited from

`Omit.onInvalid`

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2214

#### Inherited from

`Omit.onInvalidCapture`

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2223

#### Inherited from

`Omit.onKeyDown`

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2224

#### Inherited from

`Omit.onKeyDownCapture`

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2226

#### Deprecated

Use `onKeyUp` or `onKeyDown` instead

#### Inherited from

`Omit.onKeyPress`

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2228

#### Deprecated

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### Inherited from

`Omit.onKeyPressCapture`

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2229

#### Inherited from

`Omit.onKeyUp`

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2230

#### Inherited from

`Omit.onKeyUpCapture`

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2217

#### Inherited from

`Omit.onLoad`

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2218

#### Inherited from

`Omit.onLoadCapture`

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2247

#### Inherited from

`Omit.onLoadedData`

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2248

#### Inherited from

`Omit.onLoadedDataCapture`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2249

#### Inherited from

`Omit.onLoadedMetadata`

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2250

#### Inherited from

`Omit.onLoadedMetadataCapture`

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2251

#### Inherited from

`Omit.onLoadStart`

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2252

#### Inherited from

`Omit.onLoadStartCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2347

#### Inherited from

`Omit.onLostPointerCapture`

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2348

#### Inherited from

`Omit.onLostPointerCaptureCapture`

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2303

#### Inherited from

`Omit.onMouseDown`

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2304

#### Inherited from

`Omit.onMouseDownCapture`

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2305

#### Inherited from

`Omit.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2306

#### Inherited from

`Omit.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2307

#### Inherited from

`Omit.onMouseMove`

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2308

#### Inherited from

`Omit.onMouseMoveCapture`

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2309

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2310

#### Inherited from

`Omit.onMouseOutCapture`

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2311

#### Inherited from

`Omit.onMouseOver`

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2312

#### Inherited from

`Omit.onMouseOverCapture`

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2313

#### Inherited from

`Omit.onMouseUp`

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2314

#### Inherited from

`Omit.onMouseUpCapture`

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2185

#### Inherited from

`Omit.onPaste`

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2186

#### Inherited from

`Omit.onPasteCapture`

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2253

#### Inherited from

`Omit.onPause`

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2254

#### Inherited from

`Omit.onPauseCapture`

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2255

#### Inherited from

`Omit.onPlay`

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2256

#### Inherited from

`Omit.onPlayCapture`

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2257

#### Inherited from

`Omit.onPlaying`

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2258

#### Inherited from

`Omit.onPlayingCapture`

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2337

#### Inherited from

`Omit.onPointerCancel`

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2338

#### Inherited from

`Omit.onPointerCancelCapture`

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2331

#### Inherited from

`Omit.onPointerDown`

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2332

#### Inherited from

`Omit.onPointerDownCapture`

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2339

#### Inherited from

`Omit.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2340

#### Inherited from

`Omit.onPointerLeave`

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2333

#### Inherited from

`Omit.onPointerMove`

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2334

#### Inherited from

`Omit.onPointerMoveCapture`

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2343

#### Inherited from

`Omit.onPointerOut`

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2344

#### Inherited from

`Omit.onPointerOutCapture`

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2341

#### Inherited from

`Omit.onPointerOver`

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2342

#### Inherited from

`Omit.onPointerOverCapture`

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2335

#### Inherited from

`Omit.onPointerUp`

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2336

#### Inherited from

`Omit.onPointerUpCapture`

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2259

#### Inherited from

`Omit.onProgress`

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2260

#### Inherited from

`Omit.onProgressCapture`

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2261

#### Inherited from

`Omit.onRateChange`

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2262

#### Inherited from

`Omit.onRateChangeCapture`

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2209

#### Inherited from

`Omit.onReset`

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2210

#### Inherited from

`Omit.onResetCapture`

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2351

#### Inherited from

`Omit.onScroll`

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2352

#### Inherited from

`Omit.onScrollCapture`

***

### onScrollEnd?

> `optional` **onScrollEnd**: `UIEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2353

#### Inherited from

`Omit.onScrollEnd`

***

### onScrollEndCapture?

> `optional` **onScrollEndCapture**: `UIEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2354

#### Inherited from

`Omit.onScrollEndCapture`

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2263

#### Inherited from

`Omit.onSeeked`

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2264

#### Inherited from

`Omit.onSeekedCapture`

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2265

#### Inherited from

`Omit.onSeeking`

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2266

#### Inherited from

`Omit.onSeekingCapture`

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2317

#### Inherited from

`Omit.onSelect`

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2318

#### Inherited from

`Omit.onSelectCapture`

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2267

#### Inherited from

`Omit.onStalled`

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2268

#### Inherited from

`Omit.onStalledCapture`

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2211

#### Inherited from

`Omit.onSubmit`

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2212

#### Inherited from

`Omit.onSubmitCapture`

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2269

#### Inherited from

`Omit.onSuspend`

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2270

#### Inherited from

`Omit.onSuspendCapture`

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2271

#### Inherited from

`Omit.onTimeUpdate`

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2272

#### Inherited from

`Omit.onTimeUpdateCapture`

***

### onToggle?

> `optional` **onToggle**: `ToggleEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2369

#### Inherited from

`Omit.onToggle`

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2321

#### Inherited from

`Omit.onTouchCancel`

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2322

#### Inherited from

`Omit.onTouchCancelCapture`

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2323

#### Inherited from

`Omit.onTouchEnd`

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2324

#### Inherited from

`Omit.onTouchEndCapture`

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2325

#### Inherited from

`Omit.onTouchMove`

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2326

#### Inherited from

`Omit.onTouchMoveCapture`

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2327

#### Inherited from

`Omit.onTouchStart`

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2328

#### Inherited from

`Omit.onTouchStartCapture`

***

### onTransitionCancel?

> `optional` **onTransitionCancel**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2373

#### Inherited from

`Omit.onTransitionCancel`

***

### onTransitionCancelCapture?

> `optional` **onTransitionCancelCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2374

#### Inherited from

`Omit.onTransitionCancelCapture`

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2375

#### Inherited from

`Omit.onTransitionEnd`

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2376

#### Inherited from

`Omit.onTransitionEndCapture`

***

### onTransitionRun?

> `optional` **onTransitionRun**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2377

#### Inherited from

`Omit.onTransitionRun`

***

### onTransitionRunCapture?

> `optional` **onTransitionRunCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2378

#### Inherited from

`Omit.onTransitionRunCapture`

***

### onTransitionStart?

> `optional` **onTransitionStart**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2379

#### Inherited from

`Omit.onTransitionStart`

***

### onTransitionStartCapture?

> `optional` **onTransitionStartCapture**: `TransitionEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2380

#### Inherited from

`Omit.onTransitionStartCapture`

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2273

#### Inherited from

`Omit.onVolumeChange`

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2274

#### Inherited from

`Omit.onVolumeChangeCapture`

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2275

#### Inherited from

`Omit.onWaiting`

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2276

#### Inherited from

`Omit.onWaitingCapture`

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2357

#### Inherited from

`Omit.onWheel`

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLButtonElement`\>

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2358

#### Inherited from

`Omit.onWheelCapture`

***

### part?

> `optional` **part**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2778

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)

#### Inherited from

`Omit.part`

***

### popover?

> `optional` **popover**: `""` \| `"auto"` \| `"manual"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2752

#### Inherited from

`Omit.popover`

***

### popoverTarget?

> `optional` **popoverTarget**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2754

#### Inherited from

`Omit.popoverTarget`

***

### popoverTargetAction?

> `optional` **popoverTargetAction**: `"toggle"` \| `"show"` \| `"hide"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2753

#### Inherited from

`Omit.popoverTargetAction`

***

### prefix?

> `optional` **prefix**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2730

#### Inherited from

`Omit.prefix`

***

### property?

> `optional` **property**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2731

#### Inherited from

`Omit.property`

***

### radioGroup?

> `optional` **radioGroup**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2720

#### Inherited from

`Omit.radioGroup`

***

### rel?

> `optional` **rel**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2732

#### Inherited from

`Omit.rel`

***

### resetTimeout?

> `optional` **resetTimeout**: `number`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:31](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L31)

The duration (in ms) to display the succeed/failed state before resetting to idle. Defaults to 2500.

***

### resource?

> `optional` **resource**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2733

#### Inherited from

`Omit.resource`

***

### results?

> `optional` **results**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2747

#### Inherited from

`Omit.results`

***

### rev?

> `optional` **rev**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2734

#### Inherited from

`Omit.rev`

***

### role?

> `optional` **role**: `AriaRole`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2723

#### Inherited from

`Omit.role`

***

### security?

> `optional` **security**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2748

#### Inherited from

`Omit.security`

***

### slot?

> `optional` **slot**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2712

#### Inherited from

`Omit.slot`

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2713

#### Inherited from

`Omit.spellCheck`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2714

#### Inherited from

`Omit.style`

***

### succeedContent?

> `optional` **succeedContent**: `ReactNode`

Defined in: [packages/transactions-tracking-ui/src/components/TxActionButton.tsx:27](https://github.com/TuwaIO/web3-transactions-tracking/blob/ef26e0214bae02134bca62097cf4b010e691f9d5/packages/transactions-tracking-ui/src/components/TxActionButton.tsx#L27)

Optional custom content to display in the 'succeed' state.

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2695

#### Inherited from

`Omit.suppressContentEditableWarning`

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2696

#### Inherited from

`Omit.suppressHydrationWarning`

***

### tabIndex?

> `optional` **tabIndex**: `number`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2715

#### Inherited from

`Omit.tabIndex`

***

### title?

> `optional` **title**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2716

#### Inherited from

`Omit.title`

***

### transactionsPool

> **transactionsPool**: `TransactionPool`\<`TR`, `T`\>

Defined in: packages/web3-transactions-tracking-core/dist/index.d.ts:162

A pool of all transactions currently being tracked, indexed by their `txKey`.

#### Inherited from

`Pick.transactionsPool`

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2717

#### Inherited from

`Omit.translate`

***

### type?

> `optional` **type**: `"button"` \| `"submit"` \| `"reset"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2973

#### Inherited from

`Omit.type`

***

### typeof?

> `optional` **typeof**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2735

#### Inherited from

`Omit.typeof`

***

### unselectable?

> `optional` **unselectable**: `"off"` \| `"on"`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2749

#### Inherited from

`Omit.unselectable`

***

### value?

> `optional` **value**: `string` \| `number` \| readonly `string`[]

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2974

#### Inherited from

`Omit.value`

***

### vocab?

> `optional` **vocab**: `string`

Defined in: node\_modules/.pnpm/@types+react@19.1.9/node\_modules/@types/react/index.d.ts:2736

#### Inherited from

`Omit.vocab`
