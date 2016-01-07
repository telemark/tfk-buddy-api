SELECT
  o.ID as id,
  o.GroupType as groupType,
  m.StringValue as username,
  m.ID as groupName,
  m.AttributeName as memberType
FROM
  dbMetakatalog.dbo.tblMultiValue m, dbMetakatalog.dbo.tblObjects o
WHERE
  o.ID = m.ID
AND
  o.GroupType in ('Faggruppe')
AND
  m.AttributeName in ('Owner', 'Member')
AND
  m.StringValue = '@username'
