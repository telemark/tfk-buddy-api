-- Henter fag/klasser lærer har tilgang til
SELECT
  m.ID as groupId,
  o.Description as description,
  n.StringValue as unitId,
  s.DisplayName as unitName
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
  INNER JOIN
  dbMetakatalog.dbo.tblMultiValue n ON n.ID = o.ID
  INNER JOIN
  dbMetakatalog.dbo.tblObjects s ON s.id = n.StringValue
WHERE
  n.AttributeName = 'Enhet'
  AND
  o.ID = m.ID
  AND
  m.StringValue LIKE '@username'
  AND
  m.AttributeName = 'Owner'
  AND
  o.GroupType in ('Faggruppe', 'Klassegruppe')
  AND
  m.ID NOT LIKE '%ATF%'
  AND
  m.id NOT LIKE '%ORD%'

--id				description	unitId
-- SKIVS:1STD/151KRO1004	Kroppsøving	SKIVS
-- SKIVS:2SAA/151KRO1005	Kroppsøving	SKIVS
-- SKIVS:1STC/151GEO1001	Geografi	SKIVS
-- SKIVS:1STH/151SAF1001	Samfunnsfag	SKIVS
-- SKIVS:1STC/151KRO1004	Kroppsøving	SKIVS
-- SKIVS:1STH/151KRO1004	Kroppsøving	SKIVS
-- SKIVS:1SAAB/151KRO1004	Kroppsøving	SKIVS
-- SKIVS:1STG/151GEO1001	Geografi	SKIVS
-- SKIVS:1STJ/151GEO1001	Geografi	SKIVS

