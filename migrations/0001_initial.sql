CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  full_name TEXT NOT NULL,
  business_email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  product TEXT NOT NULL,
  specification TEXT,
  volume_mt TEXT NOT NULL,
  destination TEXT NOT NULL,
  incoterm TEXT,
  delivery_period TEXT NOT NULL,
  payment_terms TEXT,
  details TEXT,
  locale TEXT NOT NULL DEFAULT 'en',
  status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'in_review', 'closed')),
  consent_at TEXT
);
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries(status);
