import { type ArrayOfType, defineType } from 'sanity';
import { Text } from 'lucide-react';

export const getDefaultBlockSetup = ({
    headingLevels = [],
    lists = false,
    annotations,
}: {
    headingLevels?: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
    lists?: boolean;
    annotations?: ArrayOfType<'object' | 'reference', undefined>[];
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}): Array<any> => {
    return [
        {
			type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
            marks: {
				decorators: [
					{ title: 'Fet', value: 'strong' },
					{ title: 'Kursiv', value: 'em' },
				],
				annotations: annotations ?? [],
			},
            lists: lists
				? [
						{ title: 'Nummerert liste', value: 'number' },
						{ title: 'Punktliste', value: 'bullet' },
					]
				: [],
        }
    ]
}


export const richText = defineType({
	name: 'richText',
	type: 'array',
	icon: Text,
	of: [
		...getDefaultBlockSetup({
			headingLevels: ['h1', 'h2', 'h3', 'h4', 'h5'],
			lists: true,
		}),
	],
});