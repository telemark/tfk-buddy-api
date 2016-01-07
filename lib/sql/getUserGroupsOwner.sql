SELECT
  m.AttributeName as Role,
  m.ID as GroupID,
  m.StringValue as Username,
  o.ObjectType,
  o.GroupType,
  o.Description,
  n.StringValue as Unit
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
  INNER JOIN
  dbMetakatalog.dbo.tblMultiValue n ON n.ID = o.ID
WHERE
  n.AttributeName = 'Enhet'
  AND
  o.ID = m.ID
  AND
  m.StringValue LIKE '@username'
  AND
  m.AttributeName = 'Owner'
  AND
  m.ID NOT LIKE '%@username'
