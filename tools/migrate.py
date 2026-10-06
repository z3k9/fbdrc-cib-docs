import os, re, shutil, json, sys
SRC = sys.argv[1]; DST = sys.argv[2]
MAP = {
 "index":"index",
 "getting-started/overview":"overview",
 "getting-started/web-portal":"web-portal/sign-up",
 "getting-started/admin-portal":"bank-staff/admin-portal",
 "getting-started/mobile":"mobile/overview",
 "getting-started/host-to-host":"host-to-host/overview",
 "dashboard":"web-portal/dashboard",
 "settings/settings":"web-portal/settings",
 "support/support":"support",
}
for sec,new in [("account-services","accounts"),("approval-queue","approvals"),("payment-services","payments"),("administration","administration")]:
    for f in os.listdir(os.path.join(SRC,sec)):
        if f.endswith(".mdx"): MAP[f"{sec}/{f[:-4]}"]=f"web-portal/{new}/{f[:-4]}"
json.dump(MAP, open(os.path.join(DST,"..","tools","route-map.json"),"w"), indent=1)
os.makedirs(DST, exist_ok=True)
def fix_links(t):
    def rl(m):
        path, anchor = m.group(2), m.group(3) or ""
        p = path.strip("/")
        return m.group(1) + "/" + MAP.get(p, p) + anchor + m.group(4) if p in MAP else m.group(0)
    t = re.sub(r'(\]\(|href=")(/[a-z0-9\-/]*)(#[a-z0-9\-]+)?(\)|")', rl, t)
    return t
for old,new in MAP.items():
    src = os.path.join(SRC, old+".mdx"); 
    t = open(src).read()
    d = os.path.dirname(src)
    def ri(m):
        rel = m.group(1)
        absf = os.path.normpath(os.path.join(d, rel))
        img_rel = absf.split("/images/",1)[1]
        out = os.path.join(DST,"images","web-portal",img_rel)
        os.makedirs(os.path.dirname(out), exist_ok=True); shutil.copy(absf,out)
        return f'src="/images/web-portal/{img_rel}"'
    t = re.sub(r'src="(\./images/[^"]+)"', ri, t)
    t = fix_links(t)
    o = os.path.join(DST,new+".mdx"); os.makedirs(os.path.dirname(o), exist_ok=True)
    open(o,"w").write(t)
print("ok", len(MAP))
