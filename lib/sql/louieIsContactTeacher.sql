SELECT TOP 1
  CAST(COUNT(1) AS BIT) as contactTeacher
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
WHERE
  m.StringValue = '@username'
  AND
  m.AttributeName = 'Owner'
  AND
  m.ID LIKE '@atferdCode'

