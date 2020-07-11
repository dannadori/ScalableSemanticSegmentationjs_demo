import glob, os

resource_groups = [
    "testImages",
    "testImageMasks"
]

output_file = "src/resources.ts"

with open(output_file, 'w') as f:
    for g in resource_groups:
        pattern = os.path.join('public', "resources", g, "*")
        files = sorted(glob.glob(pattern))
        files = [x[len("public"):] for x in files]
        f.write(f"export const RS_{g.upper()} = {files} \n")
