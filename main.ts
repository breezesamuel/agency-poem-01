import { writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Power of Attorney

The form asks what I am to her.
I print daughter,
and the notary brings her stamp down hard enough
to dent the page.

The agent drafts the letter in her own words.
I read it twice, the second time aloud.
Halfway down: please be advised.
She asks it as a gift.
I soften it to if you would kindly,
and move the amount into the second paragraph,
where she puts it.

She is at the window, her coffee cold,
watching a bird work the lawn in small pulls.
Whose house is this, she asks.
Hers, I say.
Mine.
Both.

The agent asks whether to send.
Yes.
A cursor blinks: her name.
I let it.
`;

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(dir, "entry.txt"), poem, "utf8");
