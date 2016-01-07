SELECT
  mv.ID,
  mv.AttributeName as groupType,
  mv.StringValue as unitId,
  o.ObjectType as objectType,
  o.GroupType as groupTypeDesc,
  o.Description as description
FROM
  dbMetakatalog.dbo.tblMultiValue mv,
  dbMetakatalog.dbo.tblObjects o
WHERE
  mv.ID = o.ID
  AND AttributeName = 'Enhet'
  AND mv.ID = '@groupId'

